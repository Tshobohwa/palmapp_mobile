import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prunings: [],
};

const pruningsSlice = createSlice({
  name: "prunings",
  initialState,
  reducers: {
    setPrunings: (state, { payload }) => {
      return { ...state, prunings: payload };
    },
  },
});

export const { setPrunings } = pruningsSlice.actions;

export default pruningsSlice.reducer;
