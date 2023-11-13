import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import ManualWeedersList from "../../components/lists/ManualWeedersList";
import { db } from "../../database/migrations";

const ManualWeedingForm = () => {
  const { currentReport } = useSelector((store) => store.reports);
  const [manualweeders, setManualWeeders] = useState([]);
  const queryManualWeeders = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM workers WHERE operation_id = ?`,
        [currentReport.operation.id],
        (_, { rows }) => {
          console.log("manual weeders selected successfully");
          const manualWeeders = rows._array.map((manualWeeder) => {
            return {
              firstName: manualWeeder.first_name,
              lastName: manualWeeder.last_name,
              matricule: manualWeeder.marticule,
            };
          });
          setManualWeeders(manualWeeders);
        }
      );
    });
  };
  useEffect(() => queryManualWeeders(), []);
  return (
    <View className="flex-1">
      <ManualWeedersList items={manualweeders} />
    </View>
  );
};

export default ManualWeedingForm;
