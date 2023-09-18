import React from "react";
import ReactDOM from "react-dom/client";

/**
 * ! What components we would have.
 * 1. Header
 *      - logo
 *      - Nav-items
 * 2. Body
 *      - Search
 *      - ResturantsCard
 *          - image
 *          - start rating
 *          - cusines
 *          - time for delivery
 *          - delivery time etc
 * 3. Footer
 * 
*/

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ&usqp=CAU'></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li className="item">Home</li>
                    <li className="item">About Us</li>
                    <li className="item">Contact Us</li>
                    <li className="item">Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = () =>{
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}} >
            <img 
            className="res-img" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"
            alt="res log"
            />
            <h3>kfc</h3>
            <h4>Burgers , Fast food , Asian</h4>
            <h4>4.4 start</h4>
            <h4>38 minutes</h4>
        </div>
    );
}
const Body = () =>{
    return (
        <div className="body">
            <div className="search-bar"></div>
            <div className="resturants">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    );
}
const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div> 
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


