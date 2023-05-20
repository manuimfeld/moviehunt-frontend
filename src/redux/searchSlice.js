import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchArr: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getSearch: (state, action) => {
      state.searchArr = action.payload;
    },
  },
});

export const { getSearch } = searchSlice.actions;
export default searchSlice.reducer;
