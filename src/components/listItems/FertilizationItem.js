import { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { db } from "../../database/migrations";
import { useSelector } from "react-redux";

const FertilizationItem = ({ item }) => {
  const { currentReport } = useSelector((store) => store.reports);
  const [trees, setTrees] = useState(0);
  const [acres, setAcres] = useState(0);

  const queryFertilizationData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM fertilizations WHERE report_id = ? AND worker_matricule = ?`,
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

  const saveFertilization = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT OR REPLACE INTO fertilizations (report_id, worker_matricule, trees, acres) 
        VALUES ( ?, ?, ?, ?)`,
        [currentReport.id, item.matricule, trees, acres],
        () => console.log("Fertilization succefully saved")
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

  useEffect(() => queryFertilizationData(), []);

  const onBlurHandler = () => {
    saveFertilization();
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

export default FertilizationItem;
