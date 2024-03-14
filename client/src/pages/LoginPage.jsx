import Header from "../Header";
import "./Login.css"
import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
const LoginPage = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [redirect,setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);
    
async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
        const {data} = await axios.post('/login', {email,password});
        setUser(data);
        alert("Login successful");
        window.location.reload();
        // setRedirect(true);
        window.location.href = '/';
    }
    catch (e) {
        alert("Login failed");
    }
}

    
    return (
        <div>

            <Header />
        <div className="login-div">
            <form onSubmit={handleLoginSubmit}>
                <h1>Login</h1>
                <input type="email" placeholder="email" 
                value={email} onChange={ev => setEmail(ev.target.value)} />
                <input type="password" placeholder="password" 
                value={password} onChange={ev => setPassword(ev.target.value)}/>
                <button>Login</button>

                <div className="login-text">
                    Don't have an account yet?
                    <Link className="login-link" to={'/register'}>Register</Link>
                </div>
            </form>
        </div>
        </div>
    );
};  

export default LoginPage;