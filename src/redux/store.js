import { configureStore } from "@reduxjs/toolkit";
import trendingReducer from "./trendingSlice";
import movieReducer from "./detailSlice";
import similarReducer from "./similarSlice";

export const store = configureStore({
  reducer: {
    moviesArr: trendingReducer,
    movieData: movieReducer,
    similarArr: similarReducer,
  },
});
