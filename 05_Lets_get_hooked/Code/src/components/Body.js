import RestaurantCard from "./RestaurantCard.js";
import swiggyData from "../utils/mockdata.js";
import { useState } from "react";
  
const Body = () => {
    const swiggyObj =
      swiggyData.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    let data = swiggyObj;
    // usestate is the state variable.
    const arr = useState(data); // local state variables , this is array destructring
    const [resData , setResData] = arr;
    // state is used to maintain the state data in the react
    // it rerenders the whole component when the data is changed.
    return (
      <div className="body">
        <div className="search-bar"></div>
        <div className="filter">
          <button id="filterBtn" type="button" onClick={()=>{
            const filteredData = resData.filter((x)=>  x.info.avgRating > 4.3);
            setResData(filteredData);
          }}>Filter</button>
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