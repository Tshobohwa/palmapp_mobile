import { db } from "../sqlite";

const saveWeeding = ({ weeding, updateWeedings }) => {
  const values = [
    weeding.report_id,
    weeding.worker_matricule,
    weeding.trees,
    weeding.acres,
  ];
  db.transaction((tx) =>
    tx.executeSql(
      `INSERT OR REPLACE INTO weedings (report_id, worker_matricule, trees, acres) 
        VALUES ( ?, ?, ?, ?)`,
      values,
      () => {
        console.log("Weeding saved successfully saved");
        updateWeedings(weeding);
      },
      (error) => {
        console.log("couldn't save weeding", values);
      }
    )
  );
};
export default saveWeeding;
