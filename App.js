import { Provider } from "react-redux";
import store from "./src/redux/store";
import createDataBaseSchema from "./src/db/migrations/schema";
import Loading from "./src/components/shared/Loading";

export default function App() {
  createDataBaseSchema();

  return (
    <Provider store={store}>
      {/* <MainNavigator /> */}
      <Loading />
    </Provider>
  );
}
