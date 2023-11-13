import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import PreviousReports from "../screens/PreviousReports";
import SelectBlock from "../screens/SelectBlock";
import SelectPlot from "../screens/SelectPlot";
import ConfirmNewForm from "../screens/ConfirmNewForm";

const AppStackNavigator = createNativeStackNavigator();

const AppStack = () => {
  return (
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
        options={{ title: "palmapp" }}
      />
      <AppStackNavigator.Screen
        name="previousReports"
        component={PreviousReports}
        options={{
          title: "Previous reports",
          headerShadowVisible: false,
        }}
      />
      <AppStackNavigator.Screen
        name="selectBlock"
        component={SelectBlock}
        options={{
          title: "Select block",
          headerShadowVisible: false,
        }}
      />
      <AppStackNavigator.Screen
        name="selectPlot"
        component={SelectPlot}
        options={{
          title: "Select plot",
          headerShadowVisible: false,
        }}
      />
      <AppStackNavigator.Screen
        name="confirmNewForm"
        component={ConfirmNewForm}
        options={{ title: "Confirm form" }}
      />
    </AppStackNavigator.Navigator>
  );
};

export default AppStack;
