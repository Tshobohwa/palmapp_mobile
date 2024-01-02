import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import items from "./_items";
import ManualWeedingComponent from "../reportComponents/ManualWeedingComponent";
import ManualWeederModal from "../../Modals/ManualWeederModal";
import { useDispatch, useSelector } from "react-redux";
import { setManualWeedings } from "../../redux/manualWeedings/manualWeedingsSlice";
import SearchBar from "../shared/SearchBar";

const ManualWeedingReport = ({ workers }) => {
  const dispatch = useDispatch();

  const { currentReport } = useSelector((store) => store.reports);
  const { manualWeedings } = useSelector((store) => store.manualWeedings);

  const [items, setItems] = useState(workers);

  const initializeReport = () => {
    if (manualWeedings[0]) return;
    const newManualWeedings = [];
    workers.forEach((worker) => {
      newManualWeedings.push({
        report_id: currentReport.report_id,
        worker_matricule: worker.matricule,
        trees: 0,
        acres: 0,
      });
    });
    dispatch(setManualWeedings(newManualWeedings));
  };

  const searchWorker = (text) => {
    setItems(
      workers.filter((worker) =>
        `${worker.first_name} ${worker.last_name} ${worker.matricule}`
          .toLowerCase()
          .includes(text.toLowerCase())
      )
    );
  };

  useEffect(() => {
    initializeReport();
  }, []);

  return (
    <>
      <SearchBar onSearchHandler={searchWorker} placeholder={"Search worker"} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ManualWeedingComponent item={item} />}
        keyExtractor={(item) => item.matricule}
      />
    </>
  );
};

export default ManualWeedingReport;
