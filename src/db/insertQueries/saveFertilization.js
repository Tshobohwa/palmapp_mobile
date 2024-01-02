import { db } from "../sqlite";

const saveFertilizations = ({ newFertilization, updateFertilizations }) => {
  const values = [
    newFertilization.report_id,
    newFertilization.worker_matricule,
    newFertilization.trees,
    newFertilization.acres,
  ];
  db.transaction((tx) =>
    tx.executeSql(
      `INSERT OR REPLACE INTO fertilizations (report_id, worker_matricule, trees, acres) 
        VALUES ( ?, ?, ?, ?)`,
      values,
      () => {
        console.log("Fertilization saved successfully saved", newFertilization);
        updateFertilizations(newFertilization);
      },
      (error) => {
        console.log("couldn't save weeding", newFertilization);
      }
    )
  );
};
export default saveFertilizations;
