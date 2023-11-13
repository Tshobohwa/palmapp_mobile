import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { db } from "../../database/migrations";
import FertilizationsList from "../../components/lists/FertilizationsList";
import { useSelector } from "react-redux";

const FertilizationForm = () => {
  const { currentReport } = useSelector((store) => store.reports);
  const [fertilizationWorkers, setFertilizationWorkers] = useState([]);
  const queryFertilizationWorkers = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM workers WHERE operation_id = ?`,
        [currentReport.operation.id],
        (_, { rows }) => {
          console.log("Fertilization workers selected successfully");
          const fertilizationWorkers = rows._array.map(
            (fertilizationWorker) => {
              return {
                firstName: fertilizationWorker.first_name,
                lastName: fertilizationWorker.last_name,
                matricule: fertilizationWorker.marticule,
              };
            }
          );
          setFertilizationWorkers(fertilizationWorkers);
        }
      );
    });
  };
  useEffect(() => queryFertilizationWorkers(), []);
  return (
    <View className="flex-1">
      <FertilizationsList items={fertilizationWorkers} />
    </View>
  );
};

export default FertilizationForm;
