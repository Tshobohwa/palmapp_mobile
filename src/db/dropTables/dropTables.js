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
    tx.executeSql(
      "DROP TABLE IF EXISTS users",
      [],
      () => console.log("users table dropped successfully"),
      () => console.log("Couldn't drop users table")
    );
    tx.executeSql(
      "DROP TABLE IF EXISTS blocks",
      [],
      () => console.log("blocks table dropped successfully"),
      () => console.log("Couldn't drop blocks table")
    );
    tx.executeSql(
      "DROP TABLE IF EXISTS plots",
      [],
      () => console.log("Plots table dropped successfully"),
      () => console.log("Couldn't drop Plots table")
    );
    tx.executeSql(
      "DROP TABLE IF EXISTS operations",
      [],
      () => console.log("operations table dropped successfully"),
      () => console.log("Couldn't drop operations table")
    );
    tx.executeSql(
      "DROP TABLE IF EXISTS workers",
      [],
      () => console.log("workers table dropped successfully"),
      () => console.log("Couldn't drop workers table unfortunatly")
    );
  });
};
