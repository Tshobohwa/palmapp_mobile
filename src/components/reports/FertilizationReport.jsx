import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import FertilizationComponent from "../reportComponents/FertilizationComponent";
import { useDispatch, useSelector } from "react-redux";
import { setFertlizations } from "../../redux/fertilizations/fertilizationsSlice";
import SearchBar from "../shared/SearchBar";

const FertilizationReport = ({ workers }) => {
  const dispatch = useDispatch();

  const { currentReport } = useSelector((store) => store.reports);
  const { fertilizations } = useSelector((store) => store.fertilizations);

  const [items, setItems] = useState(workers);

  const initializeReport = () => {
    if (fertilizations[0]) return;
    const newFertilizations = [];
    workers.forEach((worker) => {
      newFertilizations.push({
        report_id: currentReport.report_id,
        worker_matricule: worker.matricule,
        trees: 0,
        acres: 0,
      });
    });
    dispatch(setFertlizations(newFertilizations));
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
        renderItem={({ item }) => <FertilizationComponent item={item} />}
        keyExtractor={(item) => item.matricule}
      />
    </>
  );
};

export default FertilizationReport;
