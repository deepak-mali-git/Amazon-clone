import Header from "../Header";
import "./AcStyle.css";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";




const AccountPage = () => {
    const {ready,user} = useContext(UserContext);


    async function Logout() {
        await axios.post('/logout');
        window.location.href = '/';
    }


    if(!ready) {
        return 'Loading...'
    }

    if(ready &&!user) {
        return <Navigate to={"/login"} />
    }


    return (
        <div>
            <Header />
            <div className="account-div">
                <h3>Logged in as <span className="blue-text">{user.name} ({user.email})</span></h3>
                <button onClick={Logout}>Logout</button>
            </div>
        </div>
    )
}

export default AccountPage;