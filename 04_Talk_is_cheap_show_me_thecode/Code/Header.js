import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="container">
    <div className="item"><img id="logo" src="https://avada.com/wp-content/uploads/2021/07/avada-logo-svg.svg"/></div>
    <div className="item">
        <input id="searchBox" type="text" placeholder="search here ."></input>
    </div>
    <div className="item"><img id="profileImage" src="https://img.icons8.com/?size=256&id=23264&format=png"/></div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
