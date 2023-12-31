import { db } from "../sqlite";

const selectWorkers = (setWorkers) => {
  db.transaction((tx) =>
    tx.executeSql(
      "SELECT * FROM workers",
      [],
      (_, { rows }) => {
        setWorkers(rows._array);
      },
      () => {
        console.log("Couldn't select workers");
      }
    )
  );
};

export default selectWorkers;
