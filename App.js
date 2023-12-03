import { Provider } from "react-redux";
import store from "./src/redux/store";
import { useEffect } from "react";
import MainNavigator from "./src/routes/MainNavigator";
import createDataBaseSchema from "./src/db/migrations/schema";

export default function App() {
  useEffect(() => {
    createDataBaseSchema();
  }, []);

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
