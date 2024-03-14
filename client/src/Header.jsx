import "./Header.css"
import { UserContext } from "./UserContext";
// import Order from "./pages/Order";
import { useContext } from "react";
// import { Link , useNavigate , Navigate} from "react-router-dom";
// import axios from "axios";
function Header() {

  const {user} = useContext(UserContext);

  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    event.preventDefault();
    document.getElementById("mySidepanel").style.width = "0";
  }


  return (
    <div className="amazon-header">
      <div className="amazon-header-left-section">
        <a href="/" className="header-link">
          <img className="amazon-logo"
            src="images/amazon-logo-white.png">
          </img>    
          <img className="amazon-mobile-logo"
            src="images/amazon-mobile-logo-white.png">
          </img>
        </a>
      </div>

      <div className="amazon-header-middle-section">
        <input className="search-bar" type="text" placeholder="Search"/>

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png">
          </img>
        </button>
      </div>

      <div className="amazon-header-right-section">
        <a className="orders-link header-link" href="/Order">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
        </a>

        <a className="cart-link header-link" href="/Checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png">
            </img>
          <div className="cart-quantity js-cart-quantity">0</div>
          <div className="cart-text">Cart</div>
        </a>
      </div>

      
      <div className="hamburger-menu">
        
<div id="mySidepanel" className="sidepanel" >
  <a href="" className="closebtn" onClick={closeNav}>×</a>

  <a href="/Order" className="hover-slides border-top slidepanel-anchor">
    <img src="images/return.png" alt="Image" />
    <span>returns & orders</span>
  </a>

  <a href="/Checkout" className="hover-slides slidepanel-anchor">
    <img src="images/shopping-cart.png" alt="Image" />
    <span>cart</span>
  </a>

  <a href={user ? "/account" : "/login"} className="hover-slides slidepanel-anchor">
    <img src="https://cdn-icons-png.flaticon.com/128/7816/7816993.png" alt="Image" />         
    <span>{!!user ? <div>{user.name}</div> : <div>login</div>}</span>
  </a>
</div>

<button className="openbtn" onClick={openNav}>☰</button>  
      </div>

    </div>
  )
}

export default Header
