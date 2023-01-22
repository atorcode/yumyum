import { createSlice } from "@reduxjs/toolkit";

export const recipeCardSlice = createSlice({
  name: "recipeCard",
  initialState: {},
  reducers: {
    update: (state) => {
      return state;
    },
  },
});

// export const { update } = recipeCardSlice.actions;

export default recipeCardSlice.reducer;
