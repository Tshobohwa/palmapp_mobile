import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import workersReducer from "./workers/workersSlice";
import blocksReducer from "./blocks/blocksSlice";
import plotsReducer from "./plots/plotsSlice";
import reportsReducer from "./reports/reportsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    Workers: workersReducer,
    blocks: blocksReducer,
    plots: plotsReducer,
    reports: reportsReducer,
  },
});

export default store;
