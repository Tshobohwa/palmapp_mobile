import { Provider } from "react-redux";
import store from "./src/redux/store";
import createDataBaseSchema from "./src/db/migrations/schema";
import SignUp from "./src/screens/SignUp";

export default function App() {
  createDataBaseSchema();

  return (
    <Provider store={store}>
      {/* <MainNavigator /> */}
      <SignUp />
    </Provider>
  );
}
