import { db } from "../../sqlite";

const createPrunings = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS prunings ( report_id VARCHAR,
        worker_matricule INTEGER,
        weight FLOAT,
        UNIQUE (report_id, worker_matricule)
        )`,
      [],
      (result) => {
        console.log("Pruning table created successfully");
      },
      (error) => {
        console.log("Couldn't create prunnings table");
      }
    );
  });
};

export default createPrunings;
