import { createSlice } from "@reduxjs/toolkit";
export const changeSlice = createSlice({
  name: "filter",
  initialState: {
    filterlist: {
      brand: "all",
      sort: "none",
      price_min: 67,
      price_max: 674,
      applied: false,
      cb: false,
      cp: false,
      cs: false,
    },
  },
  reducers: {
    applyf: (state, action) => {
      state.filterlist = action.payload;
      state.filterlist.applied = true;
      state.filterlist.cb = false;
      state.filterlist.cp = false;
      state.filterlist.cs = false;
    },
    removef: (state) => {
      state.filterlist = {
        brand: "all",
        sort: "none",
        price_min: 67,
        price_max: 674,
        applied: true,
      };
    },
    rbrand: (state) => {
      state.filterlist.brand = "all";
    },
    rfilter: (state) => {
      state.filterlist.applied = false;
    },
    rprice: (state) => {
      state.filterlist.price_min = 67;
      state.filterlist.price_max = 647;
    },
    rsort: (state) => {
      state.filterlist.sort = "none";
    },
    rpill: (state, action) => {
      if (action.payload === "b") {
        state.filterlist.cb = true;
      } else if (action.payload === "p") {
        state.filterlist.cp = true;
      } else {
        state.filterlist.cs = true;
      }
    },
  },
});

export const { applyf, removef, rbrand, rprice, rsort, rpill, rfilter } =
  changeSlice.actions;
export default changeSlice.reducer;
