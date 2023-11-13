import { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { db } from "../../database/migrations";
import { useSelector } from "react-redux";

const ManualWeederItem = ({ item }) => {
  const { currentReport } = useSelector((store) => store.reports);
  const [trees, setTrees] = useState(0);
  const [acres, setAcres] = useState(0);

  const queryManualWeedingData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM manual_weedings WHERE report_id = ? AND worker_matricule = ?`,
        [currentReport.id, item.matricule],
        (_, { rows }) => {
          console.log(rows._array);
          if (!rows._array[0]) return;
          setAcres(rows._array[0].acres);
          setTrees(rows._array[0].trees);
        }
      );
    });
  };

  const saveManualWeeding = () => {
    console.log("Function called");
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT OR REPLACE INTO manual_weedings (report_id, worker_matricule, trees, acres) 
        VALUES ( ?, ?, ?, ?)`,
        [currentReport.id, item.matricule, trees, acres],
        () => console.log("Manual Weeding succefully saved")
      );
    });
  };

  const onTreesInputChangeTextHandler = (text) => {
    if (!Number.isFinite(+text)) return;
    setTrees(+text);
  };
  const onAcresInputChangeTextHandler = (text) => {
    if (!Number.isFinite(+text)) return;
    setAcres(+text);
  };

  useEffect(() => queryManualWeedingData(), []);

  const onBlurHandler = () => {
    saveManualWeeding();
  };
  return (
    <View className="w-[100vw] items-center justify-center mt-2">
      <View className=" w-[94vw] shadow-md shadow-leaf-300 bg-white rounded-md p-2">
        <View>
          <Text className="font-bold text-lg">
            {item.firstName + " " + item.lastName}
          </Text>
          <Text className="text-leaf-300 text-lg">{item.matricule}</Text>
        </View>
        <View className="flex-row w-full">
          <View className="flex justify-center w-[50%]">
            <View className="w-full h-[50px] flex-row items-center justify-center bg-leaf-50 rounded-tl-md">
              <Text className="text-lg">Trees</Text>
            </View>
            <TextInput
              className="text-lg w-[100%] h-[50px] border border-leaf-50 text-center rounded-bl-md"
              value={trees.toString()}
              onChangeText={onTreesInputChangeTextHandler}
              onBlur={onBlurHandler}
            />
          </View>
          <View className="flex justify-center w-[50%]">
            <View className="w-full h-[50px] flex-row items-center justify-center bg-leaf-50 rounded-tr-md">
              <Text className="text-lg">Acres</Text>
            </View>
            <TextInput
              className="text-lg w-[100%] h-[50px] border border-leaf-50 text-center rounded-br-md"
              value={acres.toString()}
              onChangeText={onAcresInputChangeTextHandler}
              onBlur={onBlurHandler}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ManualWeederItem;
