import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PrunerModal from "../../Modals/PrunerModal";
import { useSelector } from "react-redux";

const PruningReportItem = ({ item }) => {
  const { prunings } = useSelector((store) => store.prunings);
  const { man_day } = useSelector((store) => store.reports.currentReport);

  const [modalOpened, setModalOpened] = useState(false);
  const [pruning, setPruning] = useState({});
  const [manDay, setManDay] = useState(0);

  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  useEffect(() => {
    setPruning(
      prunings.find((pruning) => pruning.worker_matricule === item.matricule)
    );
  }, [item, prunings]);

  useEffect(() => {
    if (!pruning?.weight) return;
    setManDay((pruning?.weight / man_day).toFixed(2));
  }, [pruning?.weight]);

  return (
    <>
      <PrunerModal
        closeModal={closeModal}
        modalOpened={modalOpened}
        pruning={pruning}
      />
      <TouchableOpacity
        className=" w-[94%] border border-[#d3d3d3] bg-white rounded-md my-2 p-2 mx-[3%]"
        onPress={openModal}
      >
        <View className=" w-full py-2">
          <Text className="font-bold">{`${item.first_name} ${item.last_name}`}</Text>
          <Text className="font-bold text-leaf-300">{item.matricule}</Text>
        </View>
        <View className=" flex-row w-full border-t justify-between border-leaf-50 py-3">
          <View>
            <Text>weight: {pruning?.weight}</Text>
          </View>
          <View>
            <Text>man day: {manDay}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default PruningReportItem;
