import React from "react";
import { FlatList } from "react-native";
import items from "./_items";
import FertilizationComponent from "../reportComponents/FertilizationComponent";
import FertilizerModal from "../../Modals/FertilizerModal";

const FertilizationReport = () => {
  return (
    <>
      <FertilizerModal />
      <FlatList
        data={items}
        renderItem={({ item }) => <FertilizationComponent item={item} />}
        keyExtractor={(item) => item.matricule}
      />
    </>
  );
};

export default FertilizationReport;
