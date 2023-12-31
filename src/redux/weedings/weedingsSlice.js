import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weedings: [],
};

const weedingsSlice = createSlice({
  name: "weedings",
  initialState,
  reducers: {
    setWeedings: (state, { payload }) => {
      return { ...state, weedings: payload };
    },
  },
});

export const { setWeedings } = weedingsSlice.actions;

export default weedingsSlice.reducer;
