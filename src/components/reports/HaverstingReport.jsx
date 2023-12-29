import { FlatList } from "react-native";
import HaversterModal from "../../Modals/HaversterModal";
import HaverstingListItem from "../ListItems/HaverstingListItem";
import { useDispatch, useSelector } from "react-redux";
import selectHaversts from "../../db/selectQueries/selectHaversts";
import { useEffect, useState } from "react";
import { setHaversts } from "../../redux/haversts/haverstsSlice";

const HaverstingReport = ({ workers, navigation }) => {
  const dispatch = useDispatch();
  const { report_id } = useSelector((store) => store.reports.currentReport);
  const { haversts } = useSelector((store) => store.haversts);
  const [items, setItems] = useState([]);

  const updateHaversts = (haversts) => {
    dispatch(setHaversts(haversts));
  };

  const filterHaversts = () => {
    const items = [];
    workers.forEach((worker) => {
      const haversts = [];
      haversts.forEach((haverst) => {
        if (haverst.worker_matricule === worker.matricule)
          haversts.push(haverst);
      });
      items.push({ ...worker, haversts });
    });
    setItems(items);
  };

  useEffect(() => {
    selectHaversts(report_id, updateHaversts);
  }, [report_id]);

  useEffect(() => {
    filterHaversts();
  }, [haversts]);

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
