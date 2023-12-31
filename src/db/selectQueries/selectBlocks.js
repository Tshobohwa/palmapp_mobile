import { db } from "../sqlite";

const selectBlocks = (setBlocks) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM blocks",
      [],
      (_, { rows }) => {
        setBlocks(rows._array);
      },
      (error) => {
        console.log("Couldn't select blocks");
      }
    );
  });
};

export default selectBlocks;
