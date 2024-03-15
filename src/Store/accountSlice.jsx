import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    user_tab: 1,
    c1: true,
    c2: false,
    c3: false,
  },

  reducers: {
    changed: (state, action) => {
      state.user_tab = action.payload;
      if (action.payload === 1) {
        state.c1 = true;
        state.c2 = false;
        state.c3 = false;
      } else if (action.payload === 2) {
        state.c1 = false;
        state.c2 = true;
        state.c3 = false;
      } else {
        state.c1 = false;
        state.c2 = false;
        state.c3 = true;
      }
    },
  },
});
export const { changed } = accountSlice.actions;
export default accountSlice.reducer;
