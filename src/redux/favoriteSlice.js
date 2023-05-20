import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteArr: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    getFavorite: (state, action) => {
      state.favoriteArr = action.payload;
    },
  },
});

export const { getFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
