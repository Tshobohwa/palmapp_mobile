import React from "react";
import { FlatList } from "react-native";
import items from "./_items";
import FertilizationComponent from "../reportComponents/FertilizationComponent";

const FertilizationReport = () => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <FertilizationComponent item={item} />}
      keyExtractor={(item) => item.matricule}
    />
  );
};

export default FertilizationReport;
