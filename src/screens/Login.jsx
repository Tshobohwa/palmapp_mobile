import React from "react";
import ScreenWrapper from "../components/shared/ScreenWrapper";
import { Image, Text, View } from "react-native";
import AuthenticationTextInput from "../components/Authentication/AuthenticationTextInputs";
import AuthenticationSubmitButton from "../components/Authentication/AuthenticationSubmitButton";
import AuthenticationRedirectButton from "../components/Authentication/AuthenticationRedirectButton";
const Login = () => {
  return (
    <ScreenWrapper>
      <View className="flex-1 items-center pt-12 px-4 pb-5 justify-between">
        <View className=" w-full items-center">
          <Image
            source={require("../assets/images/palmapp-logo.png")}
            className=" w-[60px] h-[60px]"
          />
          <Text className=" text-xl font-bold text-leaf-300 mb-2">Login</Text>
          <AuthenticationTextInput label={"email:"} security={false} />
          <AuthenticationTextInput label={"password:"} security={true} />
        </View>
        <View className=" w-full items-center">
          <AuthenticationSubmitButton text={"login"} />
          <View className=" flex-row mt-4">
            <Text>Not registered yet?</Text>
            <AuthenticationRedirectButton>Log in</AuthenticationRedirectButton>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
