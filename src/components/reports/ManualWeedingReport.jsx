import React from "react";
import { FlatList } from "react-native";
import items from "./_items";
import ManualWeedingComponent from "../reportComponents/ManualWeedingComponent";

const ManualWeedingReport = () => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <ManualWeedingComponent item={item} />}
      keyExtractor={(item) => item.matricule}
    />
  );
};

export default ManualWeedingReport;
