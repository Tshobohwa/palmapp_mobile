import { db } from "../sqlite";

export const saveOperation = (operation) => {
  const params = [operation.id, operation.name];
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO operations (id, name) VALUES (?, ?)",
      params,
      (result) => {
        console.log(`Operation ${operation.name} saved successfuly`);
      },
      (error) => {
        console.log("Couldn't save the operation " + operation.name);
      }
    );
  });
};
