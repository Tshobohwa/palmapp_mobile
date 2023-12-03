import createUsers from "./migrate/01createUsers";
import createOperations from "./migrate/02createOperations";
import createBlocks from "./migrate/03createBlocks";
import createPlots from "./migrate/04createPlots";
import createReports from "./migrate/05createReports";
import createWorkers from "./migrate/06createWorkers";
import createHaverts from "./migrate/07createHaverts";
import createManualWeedings from "./migrate/08createManualWeedings";
import createFertilizations from "./migrate/09createFertilizations";
import createPrunings from "./migrate/10createPruning";

const createDataBaseSchema = () => {
  createUsers();

  createOperations();

  createBlocks();

  createPlots();

  createReports();

  createWorkers();

  createHaverts();

  createManualWeedings();

  createFertilizations();

  createPrunings();

  createPrunings();
};

export default createDataBaseSchema;
