import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const PruningReportItem = ({ item }) => {
  return (
    <TouchableOpacity className=" w-[94%] border border-[#d3d3d3] bg-white rounded-md my-2 p-2 mx-[3%]">
      <View className=" w-full py-2">
        <Text className="font-bold">{`${item.first_name} ${item.last_name}`}</Text>
        <Text className="font-bold text-leaf-300">{item.matricule}</Text>
      </View>
      <View className=" flex-row w-full border-t justify-between border-leaf-50 py-3">
        <View>
          <Text>weight: {/* trees goes here */}</Text>
        </View>
        <View>
          <Text>man day: {/* man day goes here */}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PruningReportItem;
