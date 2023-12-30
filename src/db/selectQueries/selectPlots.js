import { db } from "../sqlite";

const selectPlots = (setPlots) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM plots",
      [],
      (_, { rows }) => {
        setPlots(rows._array);
        console.log(rows._array);
      },
      (error) => {
        console.log("couldn't select plots", error);
      }
    );
  });
};

export default selectPlots;
