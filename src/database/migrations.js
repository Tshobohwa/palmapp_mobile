export const dropReportsTable = () => {
  db.transaction((tx) =>
    tx.executeSql(
      "DROP TABLE reports",
      [],
      () => console.log("REPORT TABLE DROPPPED SUCCESSFULY"),
      () => console.log("FAILED TO DROP REPORT TABLE")
    )
  );
};

export const dropuUsersTable = () => {
  db.transaction((tx) =>
    tx.executeSql(
      "DROP TABLE users",
      [],
      () => console.log("USERS TABLE DROPPED SUCCESSFULY"),
      () => console.log("FAILED TO DROP USERS TABLE")
    )
  );
};

export const addPlotIdColumnToReportsTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "ALTER TABLE reports ADD COLUMN plot_id INTEGER REFERENCES plots(id)",
      [],
      (result) => {
        console.log("Plot_id column successfuly added to reports table");
      },
      (error) => {
        console.log("Couldn't add plot_id column to reports table");
      }
    );
  });
};

export const addDateColumnToReportsTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "ALTER TABLE reports ADD COLUMN date DATE",
      [],
      (result) => {
        console.log("Date column successfuly added to reports table");
      },
      (error) => {
        console.log("Couldn't add date column to reports table");
      }
    );
  });
};

export const dropTables = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "DROP TABLE IF EXISTS fertilizations",
      [],
      () => console.log("Fertilizations table dropped successfully"),
      () => console.log("Couldn't drop fertilizations table")
    );
    tx.executeSql(
      "DROP TABLE IF EXISTS prunings",
      [],
      () => console.log("Pruning table dropped successfully"),
      () => console.log("Couldn't drop pruning table")
    );
    tx.executeSql(
      "DROP TABLE IF EXISTS weedings",
      [],
      () => console.log("Weedings table dropped successfully"),
      () => console.log("Couldn't drop weedings table")
    );
    tx.executeSql(
      "DROP TABLE IF EXISTS manual_weedings",
      [],
      () => console.log("Manual weedings table dropped successfully"),
      () => console.log("Couldn't drop manual weedings table")
    );
    tx.executeSql(
      "DROP TABLE IF EXISTS harvests",
      [],
      () => console.log("Harvests table dropped successfully"),
      () => console.log("Couldn't drop harvests table")
    );
  });
};
