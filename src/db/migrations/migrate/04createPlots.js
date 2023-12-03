import { db } from "../../sqlite";

const createPlots = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS plots ( id INTEGER PRIMARY KEY, block_id INTEGER REFERENCES blocks(id), name VARCHAR)",
      [],
      (result) => {
        console.log("Plots table created successfully");
      },
      (error) => {
        console.log("Couldn't create plots", error);
      }
    );
  });
};

export default createPlots;
