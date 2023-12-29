import { db } from "../../sqlite";

const createPrunings = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS prunings ( report_id TEXT REFERENCES reports(report_id),
        worker_matricule INTEGER REFERENCES workers(matricule),
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
