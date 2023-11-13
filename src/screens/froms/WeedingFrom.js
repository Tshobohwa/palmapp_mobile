import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { db } from "../../database/migrations";
import WeedersList from "../../components/lists/WeedersList";
import { useSelector } from "react-redux";

const WeedingFrom = () => {
  const { currentReport } = useSelector((store) => store.reports);
  const [weeders, setWeeders] = useState([]);
  const queryWeeders = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM workers WHERE operation_id = ?`,
        [currentReport.operation.id],
        (_, { rows }) => {
          console.log("Weeders selected successfully");
          const weeders = rows._array.map((weeder) => {
            return {
              firstName: weeder.first_name,
              lastName: weeder.last_name,
              matricule: weeder.marticule,
            };
          });
          setWeeders(weeders);
        }
      );
    });
  };
  useEffect(() => queryWeeders(), []);
  return (
    <View className="flex-1">
      <WeedersList items={weeders} />
    </View>
  );
};

export default WeedingFrom;
