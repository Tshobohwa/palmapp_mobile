import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const PreviousReportItem = ({ navigation, item }) => {
  return (
    <View className="w-full bg-white rounded-md shadow-md border border-[#d3d3d3] p-2 my-2">
      <View className="w-full flex-row justify-between">
        <Text>date:</Text>
        <Text>{item.date}</Text>
      </View>
      <View className="w-full flex-row justify-between">
        <Text>man day: </Text>
        <Text>{item.man_day}</Text>
      </View>
      <View className="w-full flex-row justify-between">
        <Text>penality:</Text>
        <Text>{item.penality}</Text>
      </View>
      <View className="w-full flex-row justify-between">
        <Text>block:</Text>
        <Text>{item.block.name}</Text>
      </View>
      <View className="w-full flex-row justify-between">
        <Text>plot:</Text>
        <Text>{item.plot.name}</Text>
      </View>
      <View className="flex-row justify-between border-t border-t-leaf-100 pt-2">
        <TouchableOpacity className="w-[42vw] h-12 bg-leaf-50 rounded-md items-center justify-center">
          <Text className="font-bold text-leaf-300">see</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[42vw] h-12 bg-leaf-300 rounded-md items-center justify-center">
          <Text className="text-white font-bold">send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreviousReportItem;
