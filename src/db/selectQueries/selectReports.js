import { db } from "../sqlite";

const selectReports = (setReports) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM reports ORDER BY date DESC",
      [],
      (_, { rows }) => {
        setReports(rows._array);
      },
      (error) => {
        console.log("couldn't select Reports", error);
      }
    );
  });
};

export default selectReports;
