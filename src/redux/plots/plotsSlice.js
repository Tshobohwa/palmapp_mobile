import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blocks: [],
  error: null,
};

const plotsSlice = createSlice({
  name: "plots",
  initialState,
  reducers: {
    setPlots: (_, { payload }) => {
      return { ...payload };
    },
  },
});

export const { setPlots } = plotsSlice.actions;

export default plotsSlice.reducer;
