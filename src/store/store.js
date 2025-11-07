import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/cartSlice";
import SearchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    search: SearchReducer,
  },
});
