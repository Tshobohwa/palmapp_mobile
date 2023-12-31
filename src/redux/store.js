import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import workersReducer from "./workers/workersSlice";
import blocksReducer from "./blocks/blocksSlice";
import plotsReducer from "./plots/plotsSlice";
import reportsReducer from "./reports/reportsSlice";
import haverstsReducer from "./haversts/haverstsSlice";
import weedingsSlice from "./weedings/weedingsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    workers: workersReducer,
    blocks: blocksReducer,
    plots: plotsReducer,
    reports: reportsReducer,
    haversts: haverstsReducer,
    weedings: weedingsSlice,
  },
});

export default store;
