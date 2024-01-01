import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import SignUp from "../screens/SignUp";
import StartReport from "../screens/StartReport";
import Report from "../screens/Report";
import PreviousReports from "../screens/PreviousReports";
import HaversterReport from "../components/reports/HaversterReport";

const AppStackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  const customScreenOptions = {
    headerStyle: {
      backgroundColor: "#048444",
    },
    headerTintColor: "#fff",
    cardStyleInterpolator: ({ current, next, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
            {
              translateX: next
                ? next.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -layouts.screen.width],
                  })
                : 1,
            },
          ],
        },
      };
    },
  };

  return (
    <NavigationContainer>
      <AppStackNavigator.Navigator screenOptions={customScreenOptions}>
        <AppStackNavigator.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <AppStackNavigator.Screen
          name="signUp"
          component={SignUp}
          options={{ headerShown: false }}
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
