import React from "react";
import { View, FlatList } from "react-native";
import PreviousReportItem from "../listItems/PreviousReportItem";

const PreviousReportsList = ({ items, navigation }) => {
  return (
    <View className="mt-[70px] w-[100vw]">
      <FlatList
        data={items}
        renderItem={({ item }) => {
          const onPressHandler = () => {};
          return (
            <PreviousReportItem
              item={item}
              onPressHandler={onPressHandler}
              navigation={navigation}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PreviousReportsList;
