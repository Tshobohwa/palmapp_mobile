import React from "react";
import { FlatList } from "react-native";
import items from "./_items";
import ManualWeedingComponent from "../reportComponents/ManualWeedingComponent";
import ManualWeederModal from "../../Modals/ManualWeederModal";

const ManualWeedingReport = () => {
  return (
    <>
      <ManualWeederModal />
      <FlatList
        data={items}
        renderItem={({ item }) => <ManualWeedingComponent item={item} />}
        keyExtractor={(item) => item.matricule}
      />
    </>
  );
};

export default ManualWeedingReport;
