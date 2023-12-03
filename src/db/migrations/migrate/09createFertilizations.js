import { db } from "../../sqlite";

const createFertilizations = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS
        fertilizations ( report_id INTEGER REFERENCES reports(id),
        worker_matricule INTEGER REFERENCES workers(matricule),
        trees INTEGER,
        acres FLOAT,
        UNIQUE (report_id, worker_matricule)
        )`,
      [],
      (result) => {
        console.log("Fertilizations table created successfully");
      },
      (error) => {
        console.log("Couldn't create fertilizations table", error);
      }
    );
  });
};

export default createFertilizations;
