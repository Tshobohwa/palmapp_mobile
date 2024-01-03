import { db } from "../sqlite";

const savePruning = (pruning, updatePrunings) => {
  const values = [pruning.report_id, pruning.worker_matricule, pruning.weight];
  db.transaction((tx) =>
    tx.executeSql(
      `INSERT OR REPLACE INTO prunings (report_id, worker_matricule, weight) VALUES (?, ?, ?) `,
      values,
      (result) => {
        console.log("Pruning saved successfully ", pruning);
        updatePrunings(pruning);
      },
      (error) => {
        console.log("Couldn't save pruning.", pruning);
      }
    )
  );
};

export default savePruning;
