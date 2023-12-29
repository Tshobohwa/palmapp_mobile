import { db } from "../../sqlite";

const createHaverts = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS
        haversts
      ( report_id TEXT REFERENCES reports(report_id),
        worker_matricule INTEGER REFERENCES workers(matricule),
        ripe_bunches INTEGER,
        green_bunches INTEGER,
        loading_zone INTEGER,
            UNIQUE (report_id, worker_matricule, loading_zone))`,
      [],
      (result) => {
        console.log("Haversts table created successfully");
      },
      (error) => {
        console.log("Couldn't create haversts", error);
      }
    );
  });
};

export default createHaverts;
