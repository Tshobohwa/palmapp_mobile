import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  gotoStartReport = () => {
    navigation.navigate("Start Report");
  };

  gotoPreviousReports = () => {
    navigation.navigate("Previous Reports");
  };

  const queryPlotsAndBlocks = () => {};
  return (
    <View className=" flex-1 items-center justify-center gap-4">
      <Image
        source={require("../assets/images/palmapp-logo.png")}
        className=" w-[80px] h-[80px]"
      />
      <Text className=" font-bold text-xl text-leaf-300">palmapp</Text>
      <TouchableOpacity
        className=" w-[80%] h-[60px] flex items-center justify-center rounded-md bg-leaf-300"
        onPress={gotoStartReport}
      >
        <Text className=" text-white font-bold">START REPORT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className=" w-[80%] h-[60px] flex items-center justify-center rounded-md border-2 border-leaf-300"
        onPress={gotoPreviousReports}
      >
        <Text className=" text-leaf-300 font-bold">PREVIOUS REPORT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
