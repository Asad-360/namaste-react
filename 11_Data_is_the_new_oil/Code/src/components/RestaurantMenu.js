import { useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import useRestrauntMenu from "../utils/useRestrauntMenu";
import Shimmer from "./Shimmer.js";
import {
  RESTRAUNT_MENU_ITEM_IMG,
  API_GET_RESTURANT_MENU,
  MENU_ITEM_TYPE_KEY,
  COLOR_PRIMARY_BG,
} from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const [isChecked, setChecked] = useState(false);
  const { resId } = useParams();
  const [resMenuItem, filterVegNonVegResMenuItem] = useRestrauntMenu(
    resId,
    API_GET_RESTURANT_MENU,
    MENU_ITEM_TYPE_KEY
  );
  if (resMenuItem.length === 0) {
    return <Shimmer shimType={"list"} />;
  }
  function handleChange(e) {
    setChecked(e.target.checked);
    filterVegNonVegResMenuItem(e.target.checked);
  }
  return (
    <div className={COLOR_PRIMARY_BG}>
      <div>
        <div className="flex justify-center">
          <span className="w-[60vw] p-4">
            <input value="Veg" type="checkbox" onChange={handleChange} />{" "}
            {isChecked ? <span>Veg Only</span> : <span>All</span>}
          </span>
        </div>
        <RestaurantCategory categoryItem={resMenuItem} imageKey = {RESTRAUNT_MENU_ITEM_IMG} />       
      </div>
    </div>
  );
};
export default RestaurantMenu;
