import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "https://palmapp.onrender.com/api/v1/";

// const uploadReport = createAsyncThunk("report/uploadReport", async (payload) => {
//   try {
//         const response = await axios.post(BASE_URL, payload);

//   }
// });

const initialState = {
  currentReport: {
    id: undefined,
    supervisor: undefined,
    operation: undefined,
    block: undefined,
    plot: undefined,
    date: undefined,
    sent: false,
  },
  newReport: false,
};

const reportsSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    setCurrentReportId: (status, { payload }) => {
      const { currentReport } = status;
      return { ...status, currentReport: { ...currentReport, id: payload } };
    },

    setCurrentReportSupervisor: (status, { payload }) => {
      const { currentReport } = status;
      return {
        ...status,
        currentReport: { ...currentReport, supervisor: payload },
      };
    },
    setCurrentReportOperation: (status, { payload }) => {
      const { currentReport } = status;
      return {
        ...status,
        currentReport: { ...currentReport, operation: payload },
      };
    },
    setCurrentReportBlock: (status, { payload }) => {
      const { currentReport } = status;
      return { ...status, currentReport: { ...currentReport, block: payload } };
    },
    setCurrentReportPlot: (status, { payload }) => {
      const { currentReport } = status;
      return { ...status, currentReport: { ...currentReport, plot: payload } };
    },
    setCurrentReportDate: (status, { payload }) => {
      const { currentReport } = status;
      return { ...status, currentReport: { ...currentReport, date: payload } };
    },

    setCurrentReport: (status, { payload }) => {
      return { ...status, currentReport: payload };
    },
    setNewReport: (status) => {
      return { ...status, newReport: true };
    },
  },
});

export default reportsSlice.reducer;

export const {
  setCurrentReportOperation,
  setCurrentReportBlock,
  setCurrentReportDate,
  setCurrentReportPlot,
  setCurrentReportSupervisor,
  setCurrentReportId,
  setCurrentReport,
  setNewReport,
} = reportsSlice.actions;
