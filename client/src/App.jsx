import { Routes, Route } from "react-router-dom";
// import { useNavigate, Navigate } from "react-router-dom
import axios from "axios";
// import { useEffect, useState } from "react";
import "./App.css"
import Layout from "./Layout";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import Tracking from "./pages/Tracking";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import AccountPage from "./pages/AccountPage";
import { UserContextProvider } from "./UserContext";



axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL
// console.log(import.meta.env.VITE_API_BASE_URL)

axios.defaults.withCredentials = true;

const App = () => {

  

  return (
    <div>
      <UserContextProvider>
      <Routes>
        <Route path="/" index element={<Layout />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Tracking" element={<Tracking />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
      </UserContextProvider>
    </div>
  )
}

export default App;
