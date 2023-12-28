import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import HaversterTableRow from "../ListItems/HaversterTableRow";

const HaversterReport = () => {
  const haversts = [
    { loading_zone: 1, ripe_bunches: 0, green_bunches: 0 },
    { loading_zone: 2, ripe_bunches: 0, green_bunches: 0 },
    { loading_zone: 3, ripe_bunches: 0, green_bunches: 0 },
    { loading_zone: 4, ripe_bunches: 0, green_bunches: 0 },
    { loading_zone: 5, ripe_bunches: 0, green_bunches: 0 },
    { loading_zone: 6, ripe_bunches: 0, green_bunches: 0 },
    { loading_zone: 7, ripe_bunches: 0, green_bunches: 0 },
    { loading_zone: 8, ripe_bunches: 0, green_bunches: 0 },
    { loading_zone: 9, ripe_bunches: 0, green_bunches: 0 },
    { loading_zone: 10, ripe_bunches: 0, green_bunches: 0 },
    { loading_zone: 11, ripe_bunches: 0, green_bunches: 0 },
    { loading_zone: 12, ripe_bunches: 0, green_bunches: 0 },
    { loading_zone: 13, ripe_bunches: 0, green_bunches: 0 },
    { loading_zone: 14, ripe_bunches: 0, green_bunches: 0 },
  ];
  return (
    <ScrollView className=" flex-1 mt-12">
      <View className="border-2  border-[#d3d3d3] ml-[3%] mr-[4%] px-[2%] rounded-md">
        <View className=" w-full flex-row justify-between items-center">
          <View className="my-4">
            <Text className=" font-bold">worker 1 Haverstert</Text>
            <Text className=" font-bold text-leaf-300">202110272</Text>
          </View>
          <Image
            source={require("../../assets/images/palmapp-logo.png")}
            className=" h-[50px] w-[50px]"
          />
        </View>
        <View className="w-full px-2 flex-row justify-between border-t border-[#d3d3d3]">
          <View className="my-4">
            <Text className=" font-bold">ripe bunches:</Text>
            <Text className=" font-bold">green bunches:</Text>
          </View>
          <View className=" my-4">
            <Text className=" font-bold">man-day:</Text>
            <Text className=" font-bold">penality:</Text>
          </View>
        </View>
      </View>
      <View className="w-full px-4 mt-5 mb-10">
        <View className=" w-full flex-row h-[50px] ">
          <View className=" w-[33%] items-center justify-center h-full border border-leaf-300 bg-leaf-50">
            <Text className=" font-bold">zone</Text>
          </View>
          <View className=" w-[33%] items-center justify-center h-full border border-leaf-300 bg-leaf-50 border-l-0 border-r-0">
            <Text className=" font-bold">R B</Text>
          </View>
          <View className=" w-[33%] items-center justify-center h-full border border-leaf-300 bg-leaf-50">
            <Text className=" font-bold">G B</Text>
          </View>
        </View>
        {haversts.map((haverst, i) => (
          <HaversterTableRow
            haverst={haverst}
            i={i}
            key={haverst.loading_zone}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default HaversterReport;
