import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/dummyData";

const initialState = {
  products: products,
  cartList: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const item = actions.payload;
      const itemInCart = state.cartList.find((prod) => prod.id === item.id);
      itemInCart
        ? itemInCart.quantity++
        : state.cartList.push({ ...item, quantity: 1 });
    },
    removeFromCart: (state, actions) => {
      const item = actions.payload;
      const itemInCart = state.cartList.find((prod) => prod.id === item.id);
      if (itemInCart) {
        itemInCart.quantity > 1
          ? itemInCart.quantity--
          : (state.cartList = state.cartList.filter(
              (prod) => prod.id !== item.id
            ));
      }
    },
    deleteFromCart: (state, actions) => {
      const item = actions.payload;
      state.cartList = state.cartList.filter((prod) => prod.id !== item.id)
    }
  },
});
export const { addToCart, removeFromCart, deleteFromCart} = cartSlice.actions;
export default cartSlice.reducer;
