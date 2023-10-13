import { useState, useEffect } from "react";
const useRestrauntMenu = (
  resId,
  getRestaurantMenuUrl,
  menuItemMenuItemKeyType
) => {
  const [resInfo, setResInfo] = useState([]);
  const [resMenuItemFiltered, setResMenuItemFiltered] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(getRestaurantMenuUrl + resId);
    const json = await response.json();
    const menuItemsData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == menuItemMenuItemKeyType)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];
    const uniqueMenuItems = menuItemsData;
    menuItemsData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });
    setResInfo(uniqueMenuItems);
    setResMenuItemFiltered(uniqueMenuItems);
  };
  const filterVegNonVeg = (isVeg) => {
    let filtered = [];
    if (isVeg) {
      filtered = resInfo.filter((x) => x.isVeg == 1);
    } else {
      filtered = resInfo;
    }
    setResMenuItemFiltered(filtered);
  };
  return [resMenuItemFiltered, filterVegNonVeg];
};
export default useRestrauntMenu;
