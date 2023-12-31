import { db } from "../../sqlite";

const createWorkers = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS workers ( matricule INTEGER PRIMARY KEY, first_name VARCHAR, last_name VARCHAR, division_id INTERGER, operation_id INTEGER REFERENCES operations(id))",
      [],
      (result) => {
        console.log("Workers table created successfully");
      },
      (error) => {
        console.log("Couldn't create workers table", error);
      }
    );
  });
};

export default createWorkers;
