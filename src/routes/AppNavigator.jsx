import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "../screens/SignUp";
import StartReport from "../screens/StartReport";
import Report from "../screens/Report";
import PreviousReports from "../screens/PreviousReports";
import HaversterReport from "../components/reports/HaversterReport";

const AppStackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#048444",
          },
          headerTintColor: "#fff",
        }}
      >
        <AppStackNavigator.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <AppStackNavigator.Screen
          name="signUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <AppStackNavigator.Screen
          name="New Report"
          component={Report}
          options={{ headerShadowVisible: false }}
        />
        <AppStackNavigator.Screen
          name="Haverster Form"
          component={HaversterReport}
        />
        <AppStackNavigator.Screen name="Start Report" component={StartReport} />
        <AppStackNavigator.Screen
          name="Previous Reports"
          component={PreviousReports}
        />
      </AppStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
