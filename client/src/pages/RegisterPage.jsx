import Header from "../Header";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const RegisterPage= () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



     async function RegisterUser(ev) {
        ev.preventDefault();
     try {
        await axios.post('/register', {
            name,
            number,
            email,
            password
        });

        alert("Registration successful");
        window.location.href = '/login';
     }
     catch (e) {
        alert("Registration failed");
     }
    }


    return (
        <div>

        <Header />
    <div className="login-div">
        <form onSubmit={RegisterUser}>
            <h1>Register</h1>

            <input type="text" 
            placeholder="name" 
             value={name}
            onChange={ev => setName(ev.target.value)} />

            <input type="number" 
            placeholder="phone"   
             value={number}
            onChange={ev => setNumber(ev.target.value)} />

            <input type="email" 
            placeholder="email"  
             value={email}
            onChange={ev => setEmail(ev.target.value)} />

            <input type="password"
             placeholder="password"  
             value={password}
            onChange={ev => setPassword(ev.target.value)} />

            <button>Register</button>

            <div className="login-text">
                Already have an account?
                <Link className="login-link" to={'/login'}>login</Link>
            </div>
        </form>
    </div>
    </div>
    )
};


export default RegisterPage;