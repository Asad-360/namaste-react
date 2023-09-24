import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
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
            <li className="item">Home</li>
            <li className="item">About Us</li>
            <li className="item">Contact Us</li>
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