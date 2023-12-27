import { createSlice, current } from "@reduxjs/toolkit";
("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.splice(state.items.findIndex((arrow) => arrow.id === action.payload.id), 1);
     

     // state.items.pop();
    },
    clearCart: (state, item) => {
      return { items: [] };
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
