export const FOOD_BASE = "https://corsproxy.io/?https://www.swiggy.com/";

export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ&usqp=CAU";
export const API_GET_RESTURANTS_LIST = FOOD_BASE+"dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
export const API_GET_RESTURANT_MENU = FOOD_BASE+"dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";
export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
export const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";