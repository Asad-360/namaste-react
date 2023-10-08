import { useState, useEffect } from "react";
const useRestrauntList = (getRestaurantListUrl) => {
  const swiggyObj = [];
  const [resData, setResData] = useState(swiggyObj);
  const [resFilteredData, setFilteredResData] = useState(swiggyObj);

  useEffect(() => {
    fetchData();
  }, []); // callback function , dependency array
  const fetchData = async () => {
    const data = await fetch(getRestaurantListUrl);
    const json = await data.json();
    debugger
    const resturantData =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants; // check for 2
    setResData(resturantData);
    setFilteredResData(resturantData);
  };
  const setFilteredRestruants = (valueFromSearchBox) => {
    const clone = resData;
    const filteredData = clone.filter((x) => {
      return x.info.name.toLowerCase().includes(valueFromSearchBox);
    });
    setFilteredResData(filteredData);
  };
  return [resFilteredData, setFilteredRestruants];
};
export default useRestrauntList;
