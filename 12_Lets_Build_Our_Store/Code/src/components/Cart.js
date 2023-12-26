import { useSelector } from "react-redux";
import RestaurantList from "./RestaurantList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import {RESTRAUNT_MENU_ITEM_IMG} from '../utils/constants';
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div>
      <div><button onClick={()=>{
        dispatch(clearCart());
      }} className="p-5 bg-slate-600 text-white font-bold rounded-sm ml-12">Clear Cart</button></div>
      <RestaurantList resMenuItem={cartItems} RESTRAUNT_MENU_ITEM_IMG={RESTRAUNT_MENU_ITEM_IMG}></RestaurantList>
    </div>
  );
};
export default Cart;
