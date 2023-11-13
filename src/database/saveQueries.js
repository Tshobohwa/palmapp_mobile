import { db } from "./migrations";

export const saveUser = (user) => {
  const params = [
    user.matricule,
    user.firstName,
    user.lastName,
    user.divisionId,
    user.operationId,
    user.token,
    user.password,
  ];
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO users ( matricule, first_name, last_name, division_id, operation_id, token, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
      params,
      (result) => {
        console.log(
          `User ${user.firstName + " " + user.lastName} saved successfuly`
        );
      },
      (error) => {
        console.log("Couldn't save the user " + user.firstName);
      }
    );
  });
};

export const saveBlock = (block) => {
  const params = [block.id, block.name];
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO blocks (id, name) VALUES (?, ?)",
      params,
      (result) => {
        console.log(`Block ${block.name} saved successfuly`);
      },
      (error) => {
        console.log("Couldn't save the block " + block.name);
      }
    );
  });
};

export const savePlot = (plot) => {
  const params = [plot.id, plot.blockId, plot.name];
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO plots (id, block_id, name) VALUES (?, ?, ?)",
      params,
      (result) => {
        console.log(`Plot ${plot.name} saved successfuly`);
      },
      (error) => {
        console.log("Couldn't save the plot " + plot.name);
      }
    );
  });
};

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

export const saveReport = (report) => {
  const params = [
    report.id,
    report.userMatricule,
    report.blockId,
    report.plotId,
    report.operationId,
    report.sent,
  ];
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO reports ( id, date, supervisor_matricule, block_id, plot_id, operation_id ) VALUES (?, ?, ?, ?, ?, ?)",
      params,
      (result) => {
        console.log(`Report ${report.id} saved successfuly`);
      },
      (error) => {
        console.log("Couldn't save the operation " + error.message);
      }
    );
  });
};

export const saveWorker = (worker) => {
  const params = [
    worker.matricule,
    worker.firstName,
    worker.lastName,
    worker.division,
    worker.operationId,
  ];
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO workers (marticule, first_name, last_name, division, operation_id) values (?, ?, ?, ?, ?)",
      params,
      (result) => {
        console.log("worker saved successfuly");
      },
      (error) => {
        console.log("Couldn't save the worker" + error.message);
      }
    );
  });
};

export const saveHaverst = (haverst) => {
  const params = [
    haverst.id,
    haverst.reportId,
    haverst.workerMatricule,
    haverst.ripeBunches,
    haverst.greenBunches,
    haverst.loadingZone,
  ];
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO haversts (id , report_id, worker_matricule, ripe_bunches, green_bunches, loading_zone) VALUES (?, ?, ?, ?, ?, ?)",
      params,
      (result) => {
        console.log("Haverst saved successfuly");
      },
      (error) => {
        console.log("Couldn't save the Haverst" + error.message);
      }
    );
  });
};

export const saveWeeding = (weeding) => {
  const params = [
    weeding.id,
    weeding.reportId,
    weeding.workerMatricule,
    weeding.trees,
    weeding.acres,
  ];
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO weedings ( id, report_id, worker_matricule, trees, acres) VALUES (?, ?, ?, ?, ?)",
      params,
      (result) => {
        console.log("Weeding saved successfuly");
      },
      (error) => {
        console.log("Couldn't save the weeding" + error.message);
      }
    );
  });
};

export const saveManualWeeding = (manualWeeding) => {
  const params = [
    manualWeeding.id,
    manualWeeding.reportId,
    manualWeeding.workerMatricule,
    manualWeeding.trees,
    manualWeeding.acres,
  ];
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO manual_weedings ( id, report_id, worker_matricule, trees, acres) VALUES (?, ?, ?, ?, ?)",
      params,
      (result) => {
        console.log("Manual weeding saved successfuly");
      },
      (error) => {
        console.log("Couldn't save the manual weeding" + error.message);
      }
    );
  });
};

export const saveFertilization = (fertilization) => {
  const params = [
    fertilization.id,
    fertilization.reportId,
    fertilization.workerMatricule,
    fertilization.trees,
    fertilization.acres,
  ];
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO fertilizations ( id, report_id, worker_matricule, trees, acres) VALUES (?, ?, ?, ?, ?)",
      params,
      (result) => {
        console.log("fertilization saved successfuly");
      },
      (error) => {
        console.log("Couldn't save the fertilization" + error.message);
      }
    );
  });
};

export const savePruning = (pruning) => {
  const params = [
    pruning.id,
    pruning.reportId,
    pruning.workerMatricule,
    pruning.weight,
  ];
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO prunings ( id, report_id, worker_matricule, trees, acres) VALUES (?, ?, ?, ?, ?)",
      params,
      (result) => {
        console.log("Pruning saved successfuly");
      },
      (error) => {
        console.log("Couldn't save the pruning" + error);
      }
    );
  });
};
