import { FlatList } from "react-native";
import HaversterModal from "../../Modals/HaversterModal";
import HaverstingListItem from "../ListItems/HaverstingListItem";
import { useDispatch, useSelector } from "react-redux";
import selectHaversts from "../../db/selectQueries/selectHaversts";
import { useEffect, useState } from "react";
import { setHaversts } from "../../redux/haversts/haverstsSlice";
import saveHaverst from "../../db/insertQueries/saveHaverst";

const HaverstingReport = ({ workers, navigation }) => {
  const dispatch = useDispatch();
  const { report_id } = useSelector((store) => store.reports.currentReport);
  const { haversts } = useSelector((store) => store.haversts);
  const [items, setItems] = useState(workers);

  const initializeReport = () => {
    const haversts = [];
    workers.forEach((worker) => {
      for (let i = 1; i <= 14; i++) {
        haversts.push({
          report_id: report_id,
          worker_matricule: worker.matricule,
          ripe_bunches: 5,
          unripe_bunches: 9,
          loading_zone: i,
        });
      }
    });
    dispatch(setHaversts(haversts));
  };

  useEffect(() => {
    if (!workers[0] || haversts[0]) return;
    initializeReport();
  }, [workers, haversts]);

  const updateHaversts = (haversts) => {
    dispatch(setHaversts(haversts));
  };

  useEffect(() => {
    selectHaversts(report_id, updateHaversts);
  }, [report_id]);

  useEffect(() => {
    setItems(workers);
  }, [workers]);

  return (
    <>
      <HaversterModal />
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
