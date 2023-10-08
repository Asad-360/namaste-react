import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import { API_GET_RESTURANTS_LIST } from "../utils/constants.js";

const Body = () => {
  const swiggyObj = [];
  //swiggyData.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  let data = swiggyObj;
  // usestate is the state variable.
  const arr = useState(data); // local state variables , this is array destructring
  const [resData, setResData] = useState(swiggyObj);
  const [resFilteredData, setFilteredResData] = useState(swiggyObj);
  const [searchValue, setSearchValue] = useState("");
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
    const data = await fetch(API_GET_RESTURANTS_LIST);
    const json = await data.json();
    const resturantData =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants; // check for 2
    setResData(resturantData);
    setFilteredResData(resturantData);
  };
  if (resData && resData.length === 0) {
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
            onChange={(e) => {
              const serValue = e.target.value;
              setSearchValue(serValue);
            }}
            value={searchValue}
          />
          <button
            onClick={() => {
              const valueFromSearchBox = searchValue.toLowerCase().trim();
              const clone = resData;
              const filteredData = clone.filter((x) => {
                return x.info.name.toLowerCase().includes(valueFromSearchBox);
              });
              setFilteredResData(filteredData);
            }}
            class="search-button"
          >
            Search
          </button>
        </div>
      </div>
      <div className="resturants">
        {resFilteredData.map((swig, index) => (
          <Link
            to={"/restaurant/" + swig?.info?.id}
            key={swig?.info?.id}
          >
            <RestaurantCard key={index} swiggyData={swig} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
