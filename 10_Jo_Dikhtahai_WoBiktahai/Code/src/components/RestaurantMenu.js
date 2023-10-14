import { useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`

import useRestrauntMenu from "../utils/useRestrauntMenu";
import Shimmer from "./Shimmer.js";
import {
  RESTRAUNT_MENU_ITEM_IMG,
  API_GET_RESTURANT_MENU,
  MENU_ITEM_TYPE_KEY,
  COLOR_PRIMARY_BG
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
    <div className={COLOR_PRIMARY_BG}>
      <div >
        <div className="flex justify-center">
          <span className="w-[60vw] p-4">
            <input value="Veg" type="checkbox" onChange={handleChange} />{" "}
            {isChecked ? <span>Veg Only</span> : <span>All</span>}
          </span>
        </div>
        <ul>
          {resMenuItem.map((restaurant) => (
            <li className="flex items-center justify-center ">
              <div className="grid grid-cols-3 gap-2 m-4 w-[60vw] p-4 bg-white shadow-sm">
                <div className="col-span-2">
                  <span
                    className={
                      restaurant.isVeg
                        ? "bg-green-500 px-4 py-0.5 rounded-sm font-bold text-white"
                        : "bg-red-400 px-4 py-0.5 rounded-sm font-bold text-white"
                    }
                  ></span>
                  <h3 className="font-bold text-lg">{restaurant.name}</h3>
                  <p className="restaurant-tags">
                    {restaurant?.cuisines?.join(", ")}
                  </p>
                  <h6 className="text-xs py-2">
                    Rs {restaurant.price ? restaurant.price : 0 / 100}
                  </h6>
                  <h5 className="font-extralight text-xs text-gray-500">
                    {restaurant.description}
                  </h5>
                </div>
                <div className="flex justify-end">
                  <img
                    className="w-[150px] object-cover rounded-sm shadow-md"
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
