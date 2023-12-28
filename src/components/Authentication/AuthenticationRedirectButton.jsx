import React from "react";
import { Text, TouchableOpacity } from "react-native";

const AuthenticationRedirectButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text className=" text-leaf-300 underline font-bold">{children}</Text>
    </TouchableOpacity>
  );
};

export default AuthenticationRedirectButton;
