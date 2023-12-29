import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  haversts: [],
};

const haverstsSlice = createSlice({
  name: "haversts",
  initialState,
  reducers: {
    setHaversts: (state, { payload }) => {
      return { ...state, haversts: payload };
    },
  },
});

export const { setHaversts } = haverstsSlice.actions;

export default haverstsSlice.reducer;
