import React from "react";
import { FlatList } from "react-native";
import items from "./_items";
import WeedingComponent from "../reportComponents/WeedingComponent";
import WeedingModal from "../../Modals/WeedingModal";

const WeedingReport = () => {
  return (
    <>
      <WeedingModal />
      <FlatList
        data={items}
        renderItem={({ item }) => <WeedingComponent item={item} />}
        keyExtractor={(item) => item.matricule}
      />
    </>
  );
};

export default WeedingReport;
