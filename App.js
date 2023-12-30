import { Provider } from "react-redux";
import store from "./src/redux/store";
import createDataBaseSchema from "./src/db/migrations/schema";
import AppNavigator from "./src/routes/AppNavigator";
import blocks from "./src/data/blocks";
import { saveBlock } from "./src/db/insertQueries/saveBlock";
import { plots } from "./src/data/plots";
import { savePlot } from "./src/db/insertQueries/savePlot";
import { dropTables } from "./src/db/dropTables/dropTables";

export default function App() {
  // dropTables();
  createDataBaseSchema();
  // blocks.forEach((block) => saveBlock(block));
  // plots.forEach((plot) => savePlot(plot));
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
