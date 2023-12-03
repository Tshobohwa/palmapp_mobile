import React, { useEffect } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentReportDate,
  setCurrentReportId,
  setCurrentReportOperation,
  setCurrentReportSupervisor,
} from "../redux/reports/reportsSlice";
import { db } from "../db/sqlite";

const Home = ({ navigation }) => {
  const { user } = useSelector((store) => store.user);
  const date = new Date().getTime();
  let operation;
  const queryOperation = () => {
    if (!user) return;
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM operations WHERE id = ?",
        [user.operationId],
        (_, { rows }) => {
          operation = rows._array[0];
        }
      );
    });
  };
  useEffect(() => {
    queryOperation();
  }, []);
  const dispatch = useDispatch();
  const startDailyReportPressHandler = () => {
    dispatch(setCurrentReportSupervisor(user));
    dispatch(setCurrentReportDate(date));
    dispatch(setCurrentReportId(date));
    dispatch(setCurrentReportOperation(operation));
    navigation.navigate("selectBlock");
  };

  const seePreviousReportsHandler = () => {
    navigation.navigate("previousReports");
  };
  return (
    <View className="h-[100vh] w-[100vw] items-center justify-center">
      <ImageBackground
        source={require("../assets/images/palmplantation.jpg")}
        className="h-full w-full flex items-center justify-center"
      >
        <TouchableOpacity
          className="mb-6"
          onPress={startDailyReportPressHandler}
        >
          <View className="h-[60px] w-[90vw] rounded-md bg-leaft-light flex items-center justify-center">
            <Text className=" text-lg text-leaf-300">Start daily report</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={seePreviousReportsHandler}>
          <View className="h-[60px] w-[90vw] rounded-md bg-leaf-300 flex items-center justify-center">
            <Text className=" text-white text-lg">View previous reports</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Home;
