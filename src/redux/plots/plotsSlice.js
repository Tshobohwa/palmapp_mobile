import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plots: [],
  error: null,
};

const plotsSlice = createSlice({
  name: "plots",
  initialState,
  reducers: {
    setPlots: (state, { payload }) => {
      return { ...state, plots: payload };
    },
  },
});

export const { setPlots } = plotsSlice.actions;

export default plotsSlice.reducer;
