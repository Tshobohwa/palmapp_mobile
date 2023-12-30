import { db } from "../../sqlite";

const createBlocks = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS blocks ( id INTEGER PRIMARY KEY, name VARCHAR, division_id INTEGER)",
      [],
      (result) => {
        console.log("Blocks table created successfully");
      },
      (error) => {
        console.log("Couldn't create blocks", error);
      }
    );
  });
};

export default createBlocks;
