import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.js";
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestrauntList from "../utils/useRestrauntList";
import UserContext from '../utils/UserContext.js';
import {
  API_GET_RESTURANTS_LIST,
  COLOR_PRIMARY_BG,
} from "../utils/constants.js";
const Body = () => {
  const [resFilteredData, setFilteredResData] = useRestrauntList(
    API_GET_RESTURANTS_LIST
  );
  const [searchValue, setSearchValue] = useState("");
    const {setName} = useContext(UserContext);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  if (resFilteredData && resFilteredData.length === 0) {
    return <Shimmer shimType={"card"} />;
  }
  return (
    <div className={COLOR_PRIMARY_BG}>
      <div className="flex justify-center">
        <div className="search p-1 my-4 rounded-md">
          <input
            type="text"
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none p-2 ring-1 ring-slate-200 shadow-sm w-96"
            placeholder="Search for food..."
            onChange={(e) => {
              const serValue = e.target.value;
              setSearchValue(serValue);
              setName(serValue);
            }}
            value={searchValue}
          />
          <button
            className="px-4 py-2 bg-orange-500 text-white  m-4 rounded-sm"
            onClick={() => {
              const valueFromSearchBox = searchValue.toLowerCase().trim();
              setFilteredResData(valueFromSearchBox);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {resFilteredData.map((swig, index) => (
          <Link to={"/restaurant/" + swig?.info?.id} key={swig?.info?.id}>
            {index % 2 == 0 ? (
              <RestaurantCardPromoted key={index} swiggyData={swig} />
            ) : (
              <RestaurantCard key={index} swiggyData={swig} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
