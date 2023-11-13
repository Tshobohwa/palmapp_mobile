import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabase("palmapp.db");

export const createUsersTable = () => {
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

export const createBlocksTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS blocks ( id INTEGER PRIMARY KEY, name VARCHAR)",
      [],
      (result) => {
        console.log("Blocks table created successfully");
      },
      (error) => {
        console.log("Couldn't create blocks", error);
      }
    );
  });
};

export const createPlotsTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS plots ( id INTEGER PRIMARY KEY, block_id INTEGER REFERENCES blocks(id), name VARCHAR)",
      [],
      (result) => {
        console.log("Plots table created successfully");
      },
      (error) => {
        console.log("Couldn't create plots", error);
      }
    );
  });
};

export const createOperationsTable = () => {
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

export const createReportsTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS reports ( id INTEGER PRIMARY KEY, date INTEGER, supervisor_id INTEGER REFERENCES users(id), block_id INTEGER REFERENCES blocks(id), plot_id INTEGER REFERENCES plots(id), operation_id INTEGER REFERENCES operations(id), sent BOOLEAN DEFAULT 0 )`,
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
      "ALTER TABLE reports ADD COLUMN date",
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

export const createWorkersTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS workers ( marticule INTEGER PRIMARY KEY, first_name VARCHAR, last_name VARCHAR, division VARCHAR, operation_id INTEGER REFERENCES operations(id))",
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

export const createHavertsTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS
        haversts
      ( report_id INTEGER REFERENCES reports(id),
        worker_matricule INTEGER REFERENCES workers(matricule),
        ripe_bunches INTEGER,
        green_bunches INTEGER,
        loading_zone INTEGER,
            UNIQUE (report_id, worker_matricule, loading_zone))`,
      [],
      (result) => {
        console.log("Haversts table created successfully");
      },
      (error) => {
        console.log("Couldn't create haversts", error);
      }
    );
  });
};

export const createWeedingsTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS
        weedings ( report_id INTEGER REFERENCES reports(id),
        worker_matricule INTEGER REFERENCES workers(matricule),
        trees INTEGER,
        acres FLOAT,
        UNIQUE (report_id, worker_matricule)
        )`,
      [],
      (result) => {
        console.log("Weedings table created successfuly");
      },
      (error) => {
        console.log("Couldn't create weeding table", error);
      }
    );
  });
};

export const createManualWeedingsTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS
        manual_weedings ( report_id INTEGER REFERENCES reports(id),
        worker_matricule INTEGER REFERENCES workers(matricule),
        trees INTEGER,
        acres FLOAT,
        UNIQUE (report_id, worker_matricule)
        )`,
      [],
      (result) => {
        console.log("Manual weedings table created successfully");
      },
      (error) => {
        console.log("Couldn't create manual weeding table", error);
      }
    );
  });
};

export const createFertilizationsTable = () => {
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
export const createPruningsTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS prunings ( report_id INTEGER REFERENCES reports(id),
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
