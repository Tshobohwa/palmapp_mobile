import React from "react";
import ScreenWrapper from "../components/shared/ScreenWrapper";
import AuthenticationPageWrapper from "../components/Authentication/AuthenticationPageWrapper";
import { Text, View } from "react-native";
import AuthenticationTextInput from "../components/Authentication/AuthenticationTextInputs";
import AuthenticationSubmitButton from "../components/Authentication/AuthenticationSubmitButton";
import AuthenticationRedirectButton from "../components/Authentication/AuthenticationRedirectButton";
const Login = () => {
  return (
    <ScreenWrapper>
      <AuthenticationPageWrapper>
        <Text className=" text-xl font-bold text-leaf-300 mb-2">Login</Text>
        <AuthenticationTextInput label={"email:"} security={false} />
        <AuthenticationTextInput label={"password:"} security={true} />
        <AuthenticationSubmitButton text={"login"} />
        <View className=" flex-row mt-4">
          <Text>Don't have an account?</Text>
          <AuthenticationRedirectButton>Sign up</AuthenticationRedirectButton>
        </View>
      </AuthenticationPageWrapper>
    </ScreenWrapper>
  );
};

export default Login;
