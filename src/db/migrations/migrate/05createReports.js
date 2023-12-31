import { db } from "../../sqlite";

const createReports = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS reports(
        report_id INTEGER PRIMARY KEY,
        date DATE,
        man_day REAL,
        penality REAL,
        supervisor_id INTEGER REFERENCES users(id),
        block_id INTEGER REFERENCES blocks(id),
        plot_id INTEGER REFERENCES plots(id),
        operation_id INTEGER REFERENCES operations(id),
        sent BOOLEAN DEFAULT 0 )`,
      [],
      (result) => {
        console.log("Reports table created successfully");
      },
      (error) => {
        console.log("Couldn't create report table", error);
      }
    );
  });
};

export default createReports;
