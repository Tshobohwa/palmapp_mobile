import { db } from "../sqlite";

const saveHaverst = (haverst, updateHaversts) => {
  const values = [
    haverst.report_id,
    haverst.worker_matricule,
    haverst.ripe_bunches,
    haverst.unripe_bunches,
    haverst.loading_zone,
  ];
  db.transaction((tx) =>
    tx.executeSql(
      `INSERT OR REPLACE INTO harversts (report_id, worker_matricule, ripe_bunches, unripe_bunches, loading_zone) 
        VALUES ( ?, ?, ?, ?, ?)`,
      values,
      () => {
        console.log("Haverst successfully saved", haverst);
        updateHaversts(haverst);
      },
      (error) => {
        console.log("couldn't save haverst", values);
      }
    )
  );
};

export default saveHaverst;
