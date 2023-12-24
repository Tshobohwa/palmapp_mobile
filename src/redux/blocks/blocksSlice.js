import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blocks: [],
  error: null,
};

const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    setBlocks: (state, { payload }) => {
      return { ...state, blocks: payload.blocks };
    },
  },
});

export const { setBlocks } = blocksSlice.actions;

export default blocksSlice.reducer;
