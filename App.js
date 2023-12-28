import { Provider } from "react-redux";
import store from "./src/redux/store";
import createDataBaseSchema from "./src/db/migrations/schema";
import SignUp from "./src/screens/SignUp";
import StartReport from "./src/screens/StartReport";
import Report from "./src/screens/Report";
import Login from "./src/screens/Login";
import { dropTables, dropuUsersTable } from "./src/database/migrations";
import SplashScreen from "./src/screens/SplashScreen";
import CurrentReport from "./src/screens/CurrentReport";
import HaversterReport from "./src/components/reports/HaversterReport";

export default function App() {
  createDataBaseSchema();
  return (
    <Provider store={store}>
      {/* <MainNavigator /> */}
      {/* <Report /> */}
      {/* <StartReport /> */}
      {/* <SignUp /> */}
      {/* <CurrentReport /> */}
      <HaversterReport />
      {/* <Login /> */}
      {/* <StartReport /> */}
    </Provider>
  );
}
