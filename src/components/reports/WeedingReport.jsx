import React from "react";
import { FlatList } from "react-native";
import items from "./_items";
import WeedingComponent from "../reportComponents/WeedingComponent";

const WeedingReport = () => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <WeedingComponent item={item} />}
      keyExtractor={(item) => item.matricule}
    />
  );
};

export default WeedingReport;
