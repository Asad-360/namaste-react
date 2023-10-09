import RestaurantCard from "./RestaurantCard.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestrauntList from "../utils/useRestrauntList";
import { API_GET_RESTURANTS_LIST } from "../utils/constants.js";
const Body = () => {
  const [resFilteredData, setFilteredResData] = useRestrauntList( API_GET_RESTURANTS_LIST);
  const [searchValue, setSearchValue] = useState("");

  if (resFilteredData && resFilteredData.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
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
              setFilteredResData(valueFromSearchBox);
            }}
            class="search-button"
          >
            Search
          </button>
        </div>
      </div>
      <div className="resturants">
        {resFilteredData.map((swig, index) => (
          <Link to={"/restaurant/" + swig?.info?.id} key={swig?.info?.id}>
            <RestaurantCard key={index} swiggyData={swig} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
