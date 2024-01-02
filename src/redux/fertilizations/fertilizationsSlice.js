import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fertilizations: [],
};

const fertilizationsSlice = createSlice({
  name: "fertilizations",
  initialState,
  reducers: {
    setFertlizations: (state, { payload }) => {
      return { ...state, fertilizations: payload };
    },
  },
});

export const { setFertlizations } = fertilizationsSlice.actions;

export default fertilizationsSlice.reducer;
