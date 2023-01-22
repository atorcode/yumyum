import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk(
  "searchBar/fetchRecipes",
  async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  }
);

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {},
  reducers: {},
});

export const selectSearchBar = (state) => state.searchBar;
export default searchBarSlice.reducer;
