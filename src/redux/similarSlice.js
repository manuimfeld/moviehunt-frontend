import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  similarArr: [],
};

export const similarSlice = createSlice({
  name: "similarMovies",
  initialState,
  reducers: {
    getSimilar: (state, action) => {
      state.similarArr = action.payload;
    },
  },
});

export const { getSimilar } = similarSlice.actions;
export default similarSlice.reducer;
