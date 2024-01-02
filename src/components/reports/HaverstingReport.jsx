import { FlatList } from "react-native";
import HaverstingListItem from "../ListItems/HaverstingListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setHaversts } from "../../redux/haversts/haverstsSlice";
import SearchBar from "../shared/SearchBar";

const HaverstingReport = ({ workers, navigation }) => {
  const dispatch = useDispatch();
  const { report_id } = useSelector((store) => store.reports.currentReport);
  const { haversts } = useSelector((store) => store.haversts);
  const [items, setItems] = useState(workers);

  const initializeReport = () => {
    if (haversts[0]) return;
    const newHaversts = [];
    workers.forEach((worker) => {
      for (let i = 1; i <= 14; i++) {
        newHaversts.push({
          report_id: report_id,
          worker_matricule: worker.matricule,
          ripe_bunches: 0,
          unripe_bunches: 0,
          loading_zone: i,
        });
      }
    });
    dispatch(setHaversts(newHaversts));
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

  useEffect(() => {
    setItems(workers);
  }, [workers]);

  return (
    <>
      <SearchBar onSearchHandler={searchWorker} placeholder="search worker" />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <HaverstingListItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.matricule}
      />
    </>
  );
};

export default HaverstingReport;
