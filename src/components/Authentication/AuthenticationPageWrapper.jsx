import React from "react";
import { View, ImageBackground, Image, Text } from "react-native";
const AuthenticationPageWrapper = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/palmplantation.jpg")}
      className="flex-1"
    >
      <View className=" flex-1 justify-between pt-10">
        <View className=" w-full flex-row items-center justify-center">
          <View className=" items-center gap-4">
            <Image
              source={require("../../assets/images/palmapp-logo.png")}
              className="h-[25vw] w-[25vw]"
            />
            <Text className=" text-xl font-bold text-white">palmapp</Text>
          </View>
        </View>
        <View className=" h-[70%] w-full bg-white rounded-t-[60px] items-center px-2 pt-7">
          {children}
        </View>
      </View>
    </ImageBackground>
  );
};

export default AuthenticationPageWrapper;
