import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logIn, loginUser } from "../redux/user/userSlice";
import { db } from "../database/migrations";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const queryUsers = (matricule, token) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM users WHERE matricule = ? AND token = ?",
        [matricule, token],
        (_, { rows }) => {
          const respons = rows._array[0];
          if (!respons) {
            setMessage("Invalid email or password!");
            return;
          }
          const user = {
            matricule: respons.matricule,
            firstName: respons.first_name,
            lastName: respons.last_name,
            divisionId: respons.division_id,
            operationId: respons.operation_id,
            token: respons.token,
          };
          console.log("successfuly loged user in");
          dispatch(loginUser({ user, error: null, loading: false }));
          navigation.navigate("home");
        },
        (_, error) => {
          console.log(error);
          const errorMessage = "Invalid password or matricule !";
          setMessage(errorMessage);
          dispatch(
            loginUser({
              user: undefined,
              error: errorMessage,
              loading: false,
            })
          );
        }
      );
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailOnChangeHandler = (text) => {
    setEmail(text);
  };
  const passwordInputOnChangeHandler = (text) => {
    setPassword(text);
  };
  const formSubmissionHandler = () => {
    logIn(email, password);
  };

  return (
    <KeyboardAvoidingView
      className="w-full h-full items-center justify-center"
      behavior="height"
    >
      <ImageBackground
        source={require("../assets/images/palmplantation.jpg")}
        className="h-full w-full object-cover object-center"
      >
        <View className="absolute top-0 w-[100%] h-[30vh] flex items-center justify-center gap-4">
          <Image
            source={require("../assets/images/palmapp-logo.png")}
            className="h-[25vw] w-[25vw]"
          />
          <Text className=" text-white font-bold text-lg">PalmApp</Text>
        </View>
        <View className="w-full h-[70vh] bg-white absolute bottom-0 rounded-t-[36px] py-10 items-center justify-center">
          <Text className=" text-leaf-300 font-bold text-lg mb-[5vw]">
            Log In
          </Text>
          <TextInput
            placeholder="email address"
            onChangeText={(text) => emailOnChangeHandler(text)}
            className="w-[90%] mx-[5%] mb-[5vw] h-[50px] rounded-md bg-leaft-light border border-leaf-100 px-4 text-lg"
          />
          <TextInput
            placeholder="password"
            onChangeText={(text) => passwordInputOnChangeHandler(text)}
            secureTextEntry={true}
            className="w-[90%] mx-[5%] h-[50px] mb-[5vw] rounded-md bg-leaft-light border border-leaf-100 px-4 text-lg"
          />
          <Text className="text-red-700">{message}</Text>
          <TouchableOpacity
            className="w-[90%] mx-[5%] h-[50px] rounded-md bg-leaf-300 flex items-center justify-center border border-leaf-100"
            onPress={formSubmissionHandler}
          >
            <Text className="text-white">Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Login;
