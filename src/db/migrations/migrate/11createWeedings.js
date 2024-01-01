import { db } from "../../sqlite";

const createWeedings = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS
        weedings ( report_id VARCHAR,
        worker_matricule,
        trees INTEGER,
        acres FLOAT,
        UNIQUE (report_id, worker_matricule)
        )`,
      [],
      (result) => {
        console.log("weedings table created successfully");
      },
      (error) => {
        console.log("Couldn't create weedings table", error);
      }
    );
  });
};

export default createWeedings;
