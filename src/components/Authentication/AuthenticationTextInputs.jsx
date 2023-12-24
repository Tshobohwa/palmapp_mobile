import React from "react";
import { Text, TextInput, View } from "react-native";

const AuthenticationTextInput = ({ label, security }) => {
  return (
    <View className="w-full m-2">
      <TextInput
        className=" w-full h-[60px] border-2 border-leaf-300 rounded-md text-lg text-center"
        secureTextEntry={security}
        placeholder={label}
      />
    </View>
  );
};

export default AuthenticationTextInput;
