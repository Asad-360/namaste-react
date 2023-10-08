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
    const indexToAccess = json.data.cards.findIndex(meetsCriteria);
    const resturantData =
      json.data.cards[indexToAccess]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
    // The below was previous with hardcoded 1
    //  json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants; // check for 2
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
  function meetsCriteria(card) {
    return (
      card?.card?.card?.gridElements?.infoWithStyle?.restaurants != null
    );
  }
  return [resFilteredData, setFilteredRestruants];
};
export default useRestrauntList;
