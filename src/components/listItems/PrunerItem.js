import { TextInput, View, Text } from "react-native";
import { db } from "../../database/migrations";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const PrunerItem = ({ item }) => {
  const { currentReport } = useSelector((store) => store.reports);
  const [weight, setWeight] = useState("0");

  const queryPruningData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM prunings",
        //  WHERE report_id = ? AND worker_matricule = ?",
        [currentReport.id, item.matricule],
        (_, { rows }) => {
          console.log(rows);
          // setWeight(rows._array[0].toString());
        }
      );
    });
  };

  const savePruning = (weight) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT OR REPLACE INTO prunings (report_id, worker_matricule, weight) 
        VALUES ( ?, ?, ?)`,
        [currentReport.id, item.matricule, weight],
        () => console.log("pruning succefully saved"),
        () => console.log("pruning couldn't save pruning")
      );
    });
  };

  const onChangeTextHandler = (text) => {
    if (!Number.isFinite(+text)) return;
    setWeight(text);
  };

  const onBlurHandler = () => {
    savePruning(+weight);
  };

  useEffect(() => {
    queryPruningData();
  }, []);
  return (
    <View className="w-[100vw] items-center justify-center mt-2">
      <View className=" w-[94vw] shadow-md shadow-leaf-300 bg-white rounded-md p-2">
        <View>
          <Text className="font-bold text-lg">
            {item.firstName + " " + item.lastName}
          </Text>
          <Text className="text-leaf-300 text-lg">{item.matricule}</Text>
        </View>
        <View className="flex-row p-3 justify-center border-t border-t-leaf-50">
          <Text className="text-lg">Total weight: </Text>
          <TextInput
            className="text-lg w-[50px] border-b-2 border-b-leaf-300 text-center"
            value={weight}
            onChangeText={onChangeTextHandler}
            onBlur={onBlurHandler}
          />
          <Text className="text-lg">Kg</Text>
        </View>
      </View>
    </View>
  );
};

export default PrunerItem;
