import React, { useEffect, useState } from "react";
import ScreenWrapper from "../components/shared/ScreenWrapper";
import { FlatList, View } from "react-native";
import PreviousReportItem from "../components/ListItems/PreviousReportItem";
import { useDispatch, useSelector } from "react-redux";
import { setReports } from "../redux/reports/reportsSlice";
import selectReports from "../db/selectQueries/selectReports";

const PreviousReports = ({ navigation }) => {
  const dispatch = useDispatch();

  const { reports } = useSelector((store) => store.reports);

  const [items, setItems] = useState(reports);

  const setCurrentReports = (reports) => {
    dispatch(setReports(reports));
  };

  useEffect(() => {
    selectReports(setCurrentReports);
  }, []);

  useEffect(() => {
    setItems(reports);
  }, [reports]);

  return (
    <View className=" flex-1 mx-2">
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <PreviousReportItem
            item={item}
            key={item.id}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default PreviousReports;
