const express  = require('express')
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');
const cookieParser = require('cookie-parser');
const axios = require('axios');


require('dotenv').config();
const app = express();



const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'adlkfa3ad89a9s8dfu';






axios({
  method: 'get',
  url: 'http://localhost:5173',
  // other configuration options
})
.then(response => {
  // console.log('Response:', response.data);
})
.catch(error => {
  console.error('Error:', error);
  // Handle error
  if (error.response) {
    // The request was made and the server responded with a status code
    console.error('Server responded with status', error.response.status);
  } else if (error.request) {
    // The request was made but no response was received
    console.error('No response received from the server');
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error setting up the request', error.message);
  }
});




 
app.use(express.json());    
app.use(cookieParser());

app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}))





mongoose.connect(process.env.MONGO_URL)



const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});




  
app.get('/test',(req,res) => {
    res.json("ok");
});







app.post('/register', async (req,res) => {

  const {name,number,email,password} = req.body;

  if (!name) {
    console.error('Name must be provided.');
    return res.status(400).json({ error: 'Name must be provided.' });
  }

  // Number validation: Check if number is provided and has 10 digits
  if (!number || !/^\d{10}$/.test(number)) {
    console.error('Number must be a 10-digit numeric value.');
    return res.status(400).json({ error: 'Number must be a 10-digit numeric value.' });
  }

  // Email validation: Check if email is provided and ends with @gmail.com
  if (!email || !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
    console.error('Email must be a valid Gmail address.');
    return res.status(400).json({ error: 'Email must be a valid Gmail address.' });
  }

  // Password validation: Check if password is provided and has more than 6 characters
  if (!password || password.length < 3) {
    console.error('Password must be at least 3 characters long.');  
    return res.status(400).json({ error: 'Password must be at least 3 characters long.' });
  }

  else {
    
  
  try {
    const {name,number,email,password} = req.body;
    const availEmail = await User.findOne({email});
    const availNumber = await User.findOne({number});

      if(availEmail) {
        res.status(422).json("email already taken"); 
        return; 
      }
      if(availNumber) {
        res.status(422).json("number already taken"); 
        return; 
      }

      const userDoc = await User.create({
        name,
        number,
        email,
        password: bcrypt.hashSync(password,bcryptSalt),
      })

      res.json({userDoc});
    }
    catch(e) {
      // console.log("error during registration");  
      res.status(422).json(e);
    }
  }

  });






app.post('/login', async (req,res) => {

  const {email,password} = req.body;


  if (!email || !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
    console.error('Email must be a valid Gmail address.');
    return res.status(400).json({ error: 'Email must be a valid Gmail address.' });
  }

  if (!password || password.length < 3) {
    console.error('Password must be at least 3 characters long.');
    return res.status(400).json({ error: 'Password must be at least 3 characters long.' });
  }

  else {

  try {
    const { email, password } = req.body;

    // Check if the user with the given email exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Create and sign a JWT token
    const token = jwt.sign({ email: user.email, id: user._id }, jwtSecret, {});

    // Set the token in a cookie and send user information in the response
    res.cookie('token', token).json({ user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }



}
});






app.get("/profile",async (req, res) => {
  const { token } = req.cookies;
  
  if(token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) {
        console.error('JWT verification error:', err.message);
        return res.status(401).json({ error: 'Invalid token' });
      }
      try {
        const { name, email, _id } = await User.findById(userData.id);
        res.json({ name, email, _id });
      } catch (error) {
        console.error('Error fetching user from database:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

  }
  else {
    res.json(null)
  }
});




app.post('/logout', (req, res) => {
  res.cookie("token", '').json();
});




app.listen(4000)