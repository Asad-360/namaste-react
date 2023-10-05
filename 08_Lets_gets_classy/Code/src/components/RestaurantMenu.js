import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import Shimmer from "./Shimmer.js";
import {
  API_GET_RESTURANT_MENU,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY,
} from "../utils/constants";
const RestaurantMenu = () => {
  const [resMenuItem, setResMenuItem] = useState([]);
  const [resMenuItemFiltered, setResMenuItemFiltered] = useState([]);
  const [isChecked, setChecked] = useState(false);
  const { resId } = useParams();
  // ! Use Effect Hook
  useEffect(() => {
    fetchResData(resId);
  }, []); // callback function , dependency array

  const fetchResData = async (resId) => {
    const response = await fetch(API_GET_RESTURANT_MENU + resId);
    const json = await response.json();

    const menuItemsData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];

    const uniqueMenuItems = [];
    menuItemsData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });
    console.log(uniqueMenuItems[0]);
    setResMenuItem(uniqueMenuItems);
    setResMenuItemFiltered(uniqueMenuItems);
  };
  if (resMenuItem.length === 0) {
    return <Shimmer />;
  }
  function handleChange(e) {
    setChecked(e.target.checked);
    let res = filterVegNonVeg(e.target.checked);
    setResMenuItemFiltered(res);
  }
  function filterVegNonVeg(isVeg) {
    let filtered = [];
    if (isVeg) {
      filtered = resMenuItem.filter((x) => x.isVeg == 1);
    } else {
      filtered = resMenuItem;
    }
    return filtered;
  }
  return (
    <div className="resturantMenuContainer">
      <div className="resturantMenu">
        <div>
          <span><input value="Veg" type="checkbox" onChange={handleChange} /> {isChecked ? <span>Veg Only</span> : <span>All</span>}</span>
        </div>
        <ul>
          {resMenuItemFiltered.map((restaurant) => (
            <li>
              <div className="resturantMenuItem">
                <div className="menuitemMeta">
                  <span
                    className={
                      restaurant.isVeg ? "vegLabel veg" : "vegLabel nonVeg"
                    }
                  >
                    x
                  </span>
                  <h3>{restaurant.name}</h3>
                  <p className="restaurant-tags">
                    {restaurant?.cuisines?.join(", ")}
                  </p>
                  <h6 className="resMenuPrice">Rs {restaurant.price ? restaurant.price : 0 / 100}</h6>
                  <h5 className="resMenuDesc">{restaurant.description}</h5>
                </div>
                <div className="menuitemImage">
                  <img
                    className="resImg"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                      restaurant.imageId
                    }
                  ></img>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
