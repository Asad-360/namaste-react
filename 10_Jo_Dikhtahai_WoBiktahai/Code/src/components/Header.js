import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {    
    const [toggleLogout , setToggleLogout] = useState('Logout');
    return (
      <div className="flex justify-between shadow-sm items-center">
        <div className="logo-container">
          <img
            className="w-28"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul className="flex m-4 p-4">
            <li className="item px-4"><Link to="/">Home</Link></li>
            <li className="item px-4"><Link to="/about">About us</Link></li>
            <li className="item px-4"><Link to="/contactus">Contact us</Link></li>
            <li className="item px-4">Cart</li>
            <li className="item px-4"><Link to="/profile">Profile</Link></li>
            <li className="item px-4">
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