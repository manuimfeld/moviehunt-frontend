import { configureStore } from "@reduxjs/toolkit";
import trendingReducer from "./trendingSlice";
import movieReducer from "./detailSlice";
import similarReducer from "./similarSlice";
import favoriteReducer from "./favoriteSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    moviesArr: trendingReducer,
    movieData: movieReducer,
    similarArr: similarReducer,
    favoriteArr: favoriteReducer,
    searchArr: searchReducer,
  },
});
