import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import About from "./About";
import { Link } from "react-router-dom";
const Header = () => {    
    const [toggleLogout , setToggleLogout] = useState('Logout');
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li className="item"><Link to="/">Home</Link></li>
            <li className="item"><Link to="/about">About us</Link></li>
            <li className="item"><Link to="/contactus">Contact us</Link></li>
            <li className="item">Cart</li>
            <li className="item">
              <button onClick={()=>{
                //toggleLogout = 'Login';
                toggleLogout === 'Logout' ? setToggleLogout('Login') : setToggleLogout('Logout');
              }} class="logout-button">{toggleLogout}</button>
            </li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;