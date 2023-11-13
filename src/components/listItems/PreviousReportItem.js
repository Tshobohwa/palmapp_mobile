import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { db } from "../../database/migrations";
import { useDispatch } from "react-redux";
import { setCurrentReport } from "../../redux/reports/reportsSlice";

const PreviousReportItem = ({ item, navigation }) => {
  let block;
  let operation;
  let plot;
  let supervisor;
  const dispatch = useDispatch();
  const [reportInfo, setReportInfo] = useState({
    date: item.date,
    id: item.id,
    sent: item.sent,
    supervisor: {},
    block: {},
    operation: {},
    plot: {},
  });
  const queryReportInfo = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM users WHERE matricule = ?",
        [item.supervisor_matricule],
        (_, { rows }) => {
          const respons = rows._array[0];
          supervisor = respons;
        }
      );
      tx.executeSql(
        "SELECT * FROM operations WHERE id = ?",
        [item.operation_id],
        (_, { rows }) => {
          const respons = rows._array[0];
          operation = respons;
        }
      );
      tx.executeSql(
        "SELECT * FROM blocks WHERE id = ?",
        [item.block_id],
        (_, { rows }) => {
          const respons = rows._array[0];
          block = respons;
        }
      );
      tx.executeSql(
        "SELECT * FROM plots WHERE id = ?",
        [item.plot_id],
        (_, { rows }) => {
          const respons = rows._array[0];
          plot = respons;
          setReportInfo({ ...reportInfo, plot, block, supervisor, operation });
          console.log(reportInfo);
        }
      );
    });
  };

  const seeReportOnPressHandler = () => {
    dispatch(setCurrentReport(reportInfo));
    navigation.navigate(reportInfo.operation.name.toLowerCase());
  };

  useEffect(() => {
    queryReportInfo();
  }, []);

  const date = new Date(reportInfo.date);

  function formatDateToAmerican(date) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <View className="w-full items-center justify-center">
      <View className="w-[90vw] bg-white rounded-md shadow-md shadow-leaf-300 p-2 my-2">
        <View className="w-full flex-row justify-between">
          <Text>date:</Text>
          <Text>{formatDateToAmerican(date)}</Text>
        </View>
        <View className="w-full flex-row justify-between">
          <Text>supervisor:</Text>
          <Text>
            {reportInfo.supervisor.first_name +
              " " +
              reportInfo.supervisor.last_name}
          </Text>
        </View>
        <View className="w-full flex-row justify-between">
          <Text>operation: </Text>
          <Text>{reportInfo.operation.name}</Text>
        </View>
        <View className="w-full flex-row justify-between">
          <Text>block:</Text>
          <Text>{reportInfo.block.name}</Text>
        </View>
        <View className="w-full flex-row justify-between">
          <Text>plot:</Text>
          <Text>{reportInfo.plot.name}</Text>
        </View>
        <View className="flex-row justify-between border-t border-t-leaf-100 pt-2">
          <TouchableOpacity
            className="w-[42vw] h-12 bg-leaf-50 rounded-md items-center justify-center"
            onPress={seeReportOnPressHandler}
          >
            <Text className="font-bold text-leaf-300">see</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[42vw] h-12 bg-leaf-300 rounded-md items-center justify-center">
            <Text className="text-white font-bold">send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PreviousReportItem;
