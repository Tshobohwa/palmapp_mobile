import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/Login";
import { useSelector } from "react-redux";

const AuthenticationStackNavigator = createNativeStackNavigator();

const AuthenticationStack = () => {
  return (
    <AuthenticationStackNavigator.Navigator>
      <AuthenticationStackNavigator.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
    </AuthenticationStackNavigator.Navigator>
  );
};

export default AuthenticationStack;
