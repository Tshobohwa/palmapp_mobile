import { db } from "../sqlite";

export const saveWorker = (worker) => {
  const values = [worker.matricule, worker.first_name, worker.last_name];
  db.transaction((tx) =>
    tx.executeSql(
      "INSERT INTO workers (matricule, first_name, last_name) VALUES (?, ?, ?)",
      values,
      (result) => {
        console.log(`Worker ${worker.matricule} saved successfully`);
      },
      () => {
        console.log("couldn't save worker");
      }
    )
  );
};
