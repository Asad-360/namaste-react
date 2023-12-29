import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [toggleLogout, setToggleLogout] = useState("Logout");
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between items-center mx-40">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex px-2">
          <li className="item px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="item px-5">
            <Link to="/about">About us</Link>
          </li>
          <li className="item px-5">
            <Link to="/contactus">Contact us</Link>
          </li>
          <li className="item px-5" >
            <Link data-testid="cartlink" to="/cart">
              Cart({cartItems ? cartItems.length : 0})
            </Link>
          </li>
          <li className="item px-5">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="item px-5">
            <button
              onClick={() => {
                //toggleLogout = 'Login';
                toggleLogout === "Logout"
                  ? setToggleLogout("Login")
                  : setToggleLogout("Logout");
              }}
            >
              {toggleLogout}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
