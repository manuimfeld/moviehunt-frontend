import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesArr: [],
};

export const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    getMovies: (state, action) => {
      state.moviesArr = action.payload;
    },
  },
});

export const { getMovies } = trendingSlice.actions;
export default trendingSlice.reducer;
