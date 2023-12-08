import React from "react";
import { Text, TouchableOpacity } from "react-native";

const AuthenticationSubmitButton = ({ text }) => {
  return (
    <TouchableOpacity className=" mt-7 w-full h-[60px] bg-leaf-300 flex justify-center items-center rounded-md">
      <Text className=" text-white text-xl">{text}</Text>
    </TouchableOpacity>
  );
};

export default AuthenticationSubmitButton;
