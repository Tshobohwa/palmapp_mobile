import React from "react";
import ScreenWrapper from "../components/shared/ScreenWrapper";
import { FlatList, View } from "react-native";
import reports from "../data/reports";
import PreviousReportItem from "../components/ListItems/PreviousReportItem";

const PreviousReports = ({ navigate }) => {
  const items = reports;
  return (
    <View className=" flex-1 mx-2">
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <PreviousReportItem item={item} key={item.id} />
        )}
        keyExtractor={(item) => item.matricule}
      />
    </View>
  );
};

export default PreviousReports;
