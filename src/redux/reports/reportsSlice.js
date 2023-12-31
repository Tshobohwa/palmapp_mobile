import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "https://palmapp.onrender.com/api/v1/";

// const uploadReport = createAsyncThunk("report/uploadReport", async (payload) => {
//   try {
//         const response = await axios.post(BASE_URL, payload);

//   }
// });

const initialState = {
  currentReport: {},
  reports: [],
};

const reportsSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    setReports: (state, { payload }) => {
      return { ...state, reports: payload };
    },
    setCurrentReport: (state, { payload }) => {
      return { ...state, currentReport: payload };
    },
  },
});

export const { setCurrentReport, setReports } = reportsSlice.actions;

export default reportsSlice.reducer;
