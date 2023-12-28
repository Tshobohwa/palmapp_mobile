import React from "react";
import { FlatList } from "react-native";
import PrunerModal from "../../Modals/PrunerModal";

const PruningReport = () => {
  return (
    <>
      <PrunerModal />
      <FlatList />
    </>
  );
};

export default PruningReport;
