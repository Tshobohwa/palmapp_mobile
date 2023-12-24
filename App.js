import { Provider } from "react-redux";
import store from "./src/redux/store";
import createDataBaseSchema from "./src/db/migrations/schema";
import SignUp from "./src/screens/SignUp";
import StartReport from "./src/screens/StartReport";
import Report from "./src/screens/Report";
import Login from "./src/screens/Login";
import { dropTables, dropuUsersTable } from "./src/database/migrations";
import SplashScreen from "./src/screens/SplashScreen";

export default function App() {
  createDataBaseSchema();
  return (
    <Provider store={store}>
      {/* <MainNavigator /> */}
      {/* <Report /> */}
      <StartReport />
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <StartReport /> */}
    </Provider>
  );
}
