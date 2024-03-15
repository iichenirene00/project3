import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    search_input: "",
    searched: false,
  },
  reducers: {
    pressed: (state, action) => {
      state.search_input = action.payload;
    },
    searched: (state, action) => {
      state.searched = action.payload;
    },
  },
});
export const { pressed, searched } = searchSlice.actions;
export default searchSlice.reducer;
