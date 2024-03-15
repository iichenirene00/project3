import { createSlice } from "@reduxjs/toolkit";

export const signSlice = createSlice({
  name: "sign",
  initialState: {
    signlist: [],
    sclick: false,
  },
  reducers: {
    signed: (state, action) => {
      state.signlist = action.payload;
      window.localStorage.setItem("signlist", JSON.stringify(state.signlist));
    },
    sclicked: (state) => {
      state.sclick = !state.sclick;
    },
    outclick: (state) => {
      state.signlist = [];
    },
  },
});
export const { signed, sclicked, outclick } = signSlice.actions;
export default signSlice.reducer;
