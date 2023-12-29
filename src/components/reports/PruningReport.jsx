import React from "react";
import { FlatList } from "react-native";
import PrunerModal from "../../Modals/PrunerModal";
import PruningReportItem from "./PruningReportItem";

const PruningReport = ({ items }) => {
  return (
    <>
      <PrunerModal />
      <FlatList
        data={items}
        renderItem={({ item }) => <PruningReportItem item={item} />}
        keyExtractor={(item) => item.matricule}
      />
    </>
  );
};

export default PruningReport;
