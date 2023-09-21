import RestaurantCard from "./RestaurantCard.js";
import swiggyData from "../utils/mockdata.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const swiggyObj = [];
  //swiggyData.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  let data = swiggyObj;
  // usestate is the state variable.
  const arr = useState(data); // local state variables , this is array destructring
  const [resData, setResData] = arr;
  // state is used to maintain the state data in the react
  // it rerenders the whole component when the data is changed.
  // ! Use Effect Hook
  useEffect(() => {
    console.log("This will be called when this component will be rendered");
    fetchData();
  }, []); // callback function , dependency array
  // ! End of effect hook
  // ! This console.log will be called before the useEffect hook
  // we now have to fetch the data.
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResData(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("rendered method is called");
  };
  console.log("body rendered is called!");
  if (resData.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      {/* <div className="search-bar"></div> */}
      <div className="search-parent">
        <div className="search-container">
          <input
            type="text"
            className="food-search"
            placeholder="Search for food..."
          />
          <button
            onClick={() => {
              const filteredData = resData.filter(
                (x) => x.info.avgRating > 4.3
              );
              setResData(filteredData);
            }}
            class="search-button"
          >
            Search
          </button>
        </div>
      </div>
      <div className="resturants">
        {resData.map((swig, index) => (
          <RestaurantCard key={index} swiggyData={swig} />
        ))}
      </div>
    </div>
  );
};
export default Body;
