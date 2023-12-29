import RestaurantList from "./RestaurantList";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantCategory = (prop) => {
  const { categoryItem, imageKey } = prop;
  const [showAccordian, setShowAccordian] = useState(-1);
  const dispatch = useDispatch();
  return (
    <div>
      {categoryItem &&
        categoryItem.map((x, index) => (
          <div className="flex flex-col justify-center items-center">
            <div className="border m-3 bg-white">
              <div className=" p-6 w-[65vw] font-bold bg-slate-50 shadow-md flex justify-between">
                <span>{x.titleName}</span>
                <span
                  className="hover:cursor-pointer"
                  data-testid = "downarrow"
                  onClick={() => {
                    if(showAccordian !== index)
                    setShowAccordian(index);
                    else
                    setShowAccordian(-1);
                  }}
                >
                  ▼
                </span>
              </div>
              {showAccordian === index ? (
                <RestaurantList
                  key={index}
                  resMenuItem={x.cardsDetails}                  
                  RESTRAUNT_MENU_ITEM_IMG={imageKey}
                  isMapable = {true}
                  addToCart = {(x)=>{
                    dispatch(addItem(x));
                  }}
                />
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};
export default RestaurantCategory;
