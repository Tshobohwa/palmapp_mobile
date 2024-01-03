import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import PruningReportItem from "./PruningReportItem";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../shared/SearchBar";
import { setPrunings } from "../../redux/prunings/PruningsSlice";

const PruningReport = () => {
  const dispatch = useDispatch();

  const { workers } = useSelector((store) => store.workers);
  const { prunings } = useSelector((store) => store.prunings);
  const { report_id } = useSelector((store) => store.reports.currentReport);

  const [items, setItems] = useState(workers);

  const searchWorker = (text) => {
    setItems(
      workers.filter((worker) =>
        `${worker.first_name} ${worker.last_name} ${worker.matricule}`
          .toLowerCase()
          .includes(text.toLowerCase())
      )
    );
  };

  const initializeReport = () => {
    const newPrunings = [];
    workers.forEach((worker) => {
      if (
        !prunings.includes(
          (pruning) => pruning.worker_matricule === worker.matricule
        )
      ) {
        newPrunings.push({
          worker_matricule: worker.matricule,
          weight: 0,
          report_id,
        });
      }
    });
    console.log(newPrunings);
    dispatch(setPrunings(newPrunings));
  };

  useEffect(() => {
    initializeReport();
  }, [workers]);
  return (
    <>
      <SearchBar placeholder="seach pruner" onSearchHandler={searchWorker} />
      <FlatList
        data={items}
        renderItem={({ item }) => <PruningReportItem item={item} />}
        keyExtractor={(item) => item.matricule}
      />
    </>
  );
};

export default PruningReport;
