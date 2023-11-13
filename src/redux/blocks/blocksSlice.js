import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blocks: [],
  error: null,
};

const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    setBlocks: (_, { payload }) => {
      return { ...payload };
    },
  },
});

export const { setBlocks } = blocksSlice.actions;

export default blocksSlice.reducer;
