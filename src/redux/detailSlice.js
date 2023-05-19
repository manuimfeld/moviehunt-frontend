import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieData: {},
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    getDetail: (state, action) => {
      state.movieData = action.payload;
    },
  },
});

export const { getDetail } = detailSlice.actions;
export default detailSlice.reducer;
