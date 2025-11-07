import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/dummyData";

const initialState = {
  products: products,
  searchTerm: "",
  filterCategory: "all", 
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchItem: (state, action) => {
      const item = action.payload.toLowerCase();
      state.searchTerm = item;
    },
    setFilterCategory: (state, action) => {
      const category = action.payload;
      state.filterCategory = category;
    },
  },
});
export const { searchItem, setFilterCategory } = searchSlice.actions;
export default searchSlice.reducer;
