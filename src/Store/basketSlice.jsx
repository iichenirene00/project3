import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    control: false,
  },
  reducers: {
    toggleDrawer: (state, action) => {
      state.control = action.payload;
    },
  },
});
export const { toggleDrawer } = basketSlice.actions;
export default basketSlice.reducer;
