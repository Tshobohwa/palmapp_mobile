import { db } from "../sqlite";

const saveManualWeeding = (manualWeeding, updateManualWeedings) => {
  const params = [
    manualWeeding.report_id,
    manualWeeding.worker_matricule,
    manualWeeding.trees,
    manualWeeding.acres,
  ];
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO manual_weedings (report_id, worker_matricule, trees, acres) VALUES (?, ?, ?, ?)",
      params,
      (result) => {
        console.log(`Manual Weeding saved successfuly`, manualWeeding);
        updateManualWeedings(manualWeeding);
      },
      (error) => {
        console.log("Couldn't save manual Weeding ", manualWeeding);
      }
    );
  });
};

export default saveManualWeeding;
