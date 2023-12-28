import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import Login from "./Login";
import SplashScreen from "./SplashScreen";

const Home = ({ navigation }) => {
  const { authenticated } = useSelector((store) => store.user);
  if (!authenticated) return <Login navigation={navigation} />;
  return <SplashScreen navigation={navigation} />;
};

export default Home;
