import { Provider } from "react-redux";
import store from "./src/redux/store";
import { useEffect } from "react";
import MainNavigator from "./src/routes/MainNavigator";
import {
  createBlocksTable,
  createFertilizationsTable,
  createHavertsTable,
  createManualWeedingsTable,
  createOperationsTable,
  createPlotsTable,
  createPruningsTable,
  createReportsTable,
  createUsersTable,
  createWeedingsTable,
  createWorkersTable,
} from "./src/database/migrations";

export default function App() {
  useEffect(() => {
    createUsersTable();
    createBlocksTable();
    createPlotsTable();
    createOperationsTable();
    createReportsTable();
    createWorkersTable();
    createHavertsTable();
    createWeedingsTable();
    createManualWeedingsTable();
    createPruningsTable();
    createFertilizationsTable();
  }, []);

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
