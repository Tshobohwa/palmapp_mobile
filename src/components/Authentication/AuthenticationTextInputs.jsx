import React from "react";
import { Text, TextInput, View } from "react-native";

const AuthenticationTextInput = ({ label, security }) => {
  return (
    <View className="w-full m-2">
      <Text>{label}</Text>
      <TextInput
        className=" w-full h-[60px] border-b border-leaf-300 text-lg text-center"
        secureTextEntry={security}
      />
    </View>
  );
};

export default AuthenticationTextInput;
