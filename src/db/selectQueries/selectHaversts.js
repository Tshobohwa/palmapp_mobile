import { db } from "../sqlite";

const selectHaversts = (report_id, setHaversts) => {
  db.transaction((tx) => {
    tx.executeSql("SELECT * FROM haversts WHERE report_id = ?", [report_id]),
      (_, { rows }) => {
        setHaversts(rows);
      },
      (error) => {
        console.log("couldn't select haverrsts");
      };
  });
};

export default selectHaversts;
