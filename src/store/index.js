import { configureStore } from "@reduxjs/toolkit";
import recipeCardReducer from "../features/RecipeCard/recipeCardSlice";

export default configureStore({
  reducer: {
    recipeCard: recipeCardReducer,
  },
});
