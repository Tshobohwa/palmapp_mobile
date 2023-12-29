import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "https://palmapp.onrender.com/api/v1/";

// const uploadReport = createAsyncThunk("report/uploadReport", async (payload) => {
//   try {
//         const response = await axios.post(BASE_URL, payload);

//   }
// });

const initialState = {
  currentReport: {},
};

const reportsSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    setCurrentReport: (state, { payload }) => {
      return { ...state, currentReport: payload };
    },
  },
});

export default reportsSlice.reducer;

export const { setCurrentReport } = reportsSlice.actions;
