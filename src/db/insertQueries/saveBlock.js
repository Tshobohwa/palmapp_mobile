import { db } from "../sqlite";

export const saveBlock = (block) => {
  const params = [block.id, block.name, block.division_id];
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO blocks (id, name, division_id) VALUES (?, ?, ?)",
      params,
      (result) => {
        console.log(`Block ${block.name} saved successfuly`);
      },
      (error) => {
        console.log("Couldn't save the block " + block.name);
      }
    );
  });
};
