import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  haversts: [],
  currentHaverster: {},
};

const haverstsSlice = createSlice({
  name: "haversts",
  initialState,
  reducers: {
    setHaversts: (state, { payload }) => {
      return { ...state, haversts: payload };
    },
    setCurrentHaverster: (state, { payload }) => {
      return { ...state, currentHaverster: payload };
    },
  },
});

export const { setHaversts, setCurrentHaverster } = haverstsSlice.actions;

export default haverstsSlice.reducer;
