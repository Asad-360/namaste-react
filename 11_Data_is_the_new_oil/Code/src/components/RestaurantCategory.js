import RestaurantList from "./RestaurantList";
import { useState } from "react";
const RestaurantCategory = (prop) => {
  const { categoryItem, imageKey } = prop;
  const [showAccordian, setShowAccordian] = useState(false);
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
                  onClick={() => {
                    let clonedstate = showAccordian;
                    setShowAccordian(!clonedstate);
                  }}
                >
                  ▼
                </span>
              </div>
              {/* <RestaurantCategory categoryItem={x.cardDetails} /> */}
              {showAccordian ? (
                <RestaurantList
                  key={index}
                  resMenuItem={x.cardsDetails}
                  RESTRAUNT_MENU_ITEM_IMG={imageKey}
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
