import { db } from "../../sqlite";

const createUsers = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS users ( id INTEGER PRIMARY KEY, first_name VARCHAR, last_name VARCHAR, division_id INTEGER, operation_id INTEGER REFERENCES operations(id), token STRING)",
      [],
      (result) => {
        console.log("Users table created successfully");
      },
      (error) => {
        console.log("Couldn't create users table", error);
      }
    );
  });
};

export default createUsers;
