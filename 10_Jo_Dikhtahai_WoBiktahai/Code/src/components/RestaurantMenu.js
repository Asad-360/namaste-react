import { useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`

import useRestrauntMenu from "../utils/useRestrauntMenu";
import Shimmer from "./Shimmer.js";
import {
  RESTRAUNT_MENU_ITEM_IMG,
  API_GET_RESTURANT_MENU,
  MENU_ITEM_TYPE_KEY,
} from "../utils/constants";
const RestaurantMenu = () => {
  const [isChecked, setChecked] = useState(false);
  const { resId } = useParams();
  const [resMenuItem, filterVegNonVegResMenuItem] = useRestrauntMenu(
    resId,
    API_GET_RESTURANT_MENU,
    MENU_ITEM_TYPE_KEY
  );
  if (resMenuItem.length === 0) {
    return <Shimmer />;
  }
  function handleChange(e) {
    setChecked(e.target.checked);
    filterVegNonVegResMenuItem(e.target.checked);
  }
  return (
    <div className="resturantMenuContainer">
      <div className="resturantMenu">
        <div>
          <span>
            <input value="Veg" type="checkbox" onChange={handleChange} />{" "}
            {isChecked ? <span>Veg Only</span> : <span>All</span>}
          </span>
        </div>
        <ul>
          {resMenuItem.map((restaurant) => (
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
                  <h6 className="resMenuPrice">
                    Rs {restaurant.price ? restaurant.price : 0 / 100}
                  </h6>
                  <h5 className="resMenuDesc">{restaurant.description}</h5>
                </div>
                <div className="menuitemImage">
                  <img
                    className="resImg"
                    src={RESTRAUNT_MENU_ITEM_IMG + restaurant.imageId}
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
