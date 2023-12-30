import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  haversts: [],
  currentHaverster: {},
  currentHaverst: {},
  modalOpened: false,
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
    setCurrentHaverst: (state, { payload }) => {
      return { ...state, currentHaverst: payload };
    },
    openHaversterModal: (state) => {
      return { ...state, modalOpened: true };
    },
    closeHaversterModal: (state) => {
      return { ...state, modalOpened: false };
    },
  },
});

export const {
  setHaversts,
  setCurrentHaverster,
  setCurrentHaverst,
  openHaversterModal,
  closeHaversterModal,
} = haverstsSlice.actions;

export default haverstsSlice.reducer;
