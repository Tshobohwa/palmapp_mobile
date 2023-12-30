import { db } from "../sqlite";

export const savePlot = (plot) => {
  const params = [plot.id, plot.name, plot.block_id];
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO plots (id, name, block_id) VALUES (?, ?, ?)",
      params,
      (result) => {
        console.log(`Plot ${plot.name} saved successfuly`);
      },
      (error) => {
        console.log("Couldn't save the block " + plot.name);
      }
    );
  });
};
