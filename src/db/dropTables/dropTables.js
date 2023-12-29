import { db } from "../sqlite";

export const dropTables = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "DROP TABLE IF EXISTS fertilizations",
      [],
      () => console.log("Fertilizations table dropped successfully"),
      () => console.log("Couldn't drop fertilizations table")
    );
    tx.executeSql(
      "DROP TABLE IF EXISTS prunings",
      [],
      () => console.log("Pruning table dropped successfully"),
      () => console.log("Couldn't drop pruning table")
    );
    tx.executeSql(
      "DROP TABLE IF EXISTS weedings",
      [],
      () => console.log("Weedings table dropped successfully"),
      () => console.log("Couldn't drop weedings table")
    );
    tx.executeSql(
      "DROP TABLE IF EXISTS manual_weedings",
      [],
      () => console.log("Manual weedings table dropped successfully"),
      () => console.log("Couldn't drop manual weedings table")
    );
    tx.executeSql(
      "DROP TABLE IF EXISTS harvests",
      [],
      () => console.log("Harvests table dropped successfully"),
      () => console.log("Couldn't drop harvests table")
    );
    tx.executeSql(
      "DROP TABLE IF EXISTS reports",
      [],
      () => console.log("reports table dropped successfully"),
      () => console.log("Couldn't drop fertilizations table")
    );
  });
};
