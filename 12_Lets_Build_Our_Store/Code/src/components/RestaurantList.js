const RestaurantList = (prop) => {
  const { resMenuItem, RESTRAUNT_MENU_ITEM_IMG, addToCart ,removeFromCart, isMapable } = prop;
  const res =  isMapable ? resMenuItem.map((x) => x.card?.info) || [] : resMenuItem ;
  return (
    <div>
      <ul>
        {res &&
          res.map((restaurant) => (
            <li className="flex items-center justify-center ">
              <div className="grid grid-cols-3 gap-2 m-4 w-[60vw] p-4  shadow-sm border-b-2">
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
                <div className="flex justify-end flex-col">
                  <img
                    className="w-[150px] object-cover rounded-sm shadow-md"
                    src={RESTRAUNT_MENU_ITEM_IMG + restaurant.imageId}
                  ></img>
                  {  <div>
                    <button
                      onClick={() => {
                        debugger
                        isMapable ? addToCart(restaurant) : removeFromCart(restaurant); 
                      }}
                      className="bg-black text-white rounded-sm my-2 p-4"
                    >
                      {isMapable ? 'Add+' : 'Remove-'}
                    </button>
                  </div>}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default RestaurantList;
