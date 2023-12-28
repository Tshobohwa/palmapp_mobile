import { Provider } from "react-redux";
import store from "./src/redux/store";
import createDataBaseSchema from "./src/db/migrations/schema";
import AppNavigator from "./src/routes/AppNavigator";

export default function App() {
  createDataBaseSchema();
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
