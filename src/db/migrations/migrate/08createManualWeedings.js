import { db } from "../../sqlite";

const createManualWeedings = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS
        manual_weedings ( report_id INTEGER REFERENCES reports(id),
        worker_matricule INTEGER REFERENCES workers(matricule),
        trees INTEGER,
        acres FLOAT,
        UNIQUE (report_id, worker_matricule)
        )`,
      [],
      (result) => {
        console.log("Manual weedings table created successfully");
      },
      (error) => {
        console.log("Couldn't create manual weeding table", error);
      }
    );
  });
};

export default createManualWeedings;
