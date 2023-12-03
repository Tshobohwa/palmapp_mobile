const createOperations = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS operations ( id INTEGER PRIMARY KEY, name VARCHAR)",
      [],
      (result) => {
        console.log("Operations table created successfully");
      },
      (error) => {
        console.log("Couldn't create operations table", error);
      }
    );
  });
};

export default createOperations;
