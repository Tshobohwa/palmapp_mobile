import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
// import items from "./_items";
import WeedingComponent from "../reportComponents/WeedingComponent";
import { useDispatch, useSelector } from "react-redux";
import { setWeedings } from "../../redux/weedings/weedingsSlice";

const WeedingReport = () => {
  const dispatch = useDispatch();

  const { workers } = useSelector((store) => store.workers);
  const { weedings } = useSelector((store) => store.weedings);
  const { report_id } = useSelector((store) => store.reports.currentReport);

  const [items, setItems] = useState([]);

  const initializeReport = () => {
    console.log(workers, weedings, report_id);
    if (!workers[0]) return;
    setItems(workers);
    if (weedings[0]) return;
    const newWeedings = [];
    workers.forEach((worker) => {
      const weeding = {
        report_id,
        worker_matricule: worker.matricule,
        trees: 5,
        acres: 2,
      };
      newWeedings.push(weeding);
    });
    dispatch(setWeedings(newWeedings));
  };

  useEffect(() => {
    setItems(workers);
  }, [workers]);

  useEffect(() => {
    initializeReport();
  }, [workers]);

  return (
    <>
      <FlatList
        data={items}
        renderItem={({ item }) => <WeedingComponent item={item} />}
        keyExtractor={(item) => item.matricule}
      />
    </>
  );
};

export default WeedingReport;
