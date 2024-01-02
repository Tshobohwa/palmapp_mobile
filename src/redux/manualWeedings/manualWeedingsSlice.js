import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  manualWeedings: [],
};

const manualWeedingsSlice = createSlice({
  name: "manualWeedings",
  initialState,
  reducers: {
    setManualWeedings: (state, { payload }) => {
      return { ...state, manualWeedings: payload };
    },
  },
});

export const { setManualWeedings } = manualWeedingsSlice.actions;

export default manualWeedingsSlice.reducer;
