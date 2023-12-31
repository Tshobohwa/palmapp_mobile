import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import formatDateToEnglish from "../../helpers/formatDateToEnglish";

const PreviousReportItem = ({ navigation, item }) => {
  const { blocks } = useSelector((store) => store.blocks);
  const { plots } = useSelector((store) => store.plots);
  const plot = useState(plots.find((plot) => plot.id === item.plot_id))[0];
  const [block, setBlock] = useState({});
  useEffect(() => {
    setBlock(blocks.find((block) => block.id === plot.block_id) || {});
  }, [plot]);
  return (
    <View className="w-full bg-white rounded-xl shadow-md border border-[#d3d3d3] p-2 my-2">
      <View className="w-full flex-row justify-end py-2">
        <Text className=" font-bold">{formatDateToEnglish(item.date)}</Text>
      </View>
      <View className="w-full flex-row justify-between border-b border-[#d3d3d3] py-2">
        <Text>man day: </Text>
        <Text>{item.man_day}</Text>
      </View>
      <View className="w-full flex-row justify-between border-b border-[#d3d3d3] py-2">
        <Text>penality:</Text>
        <Text>{item.penality}</Text>
      </View>
      <View className="w-full flex-row justify-between border-b border-[#d3d3d3] py-2">
        <Text>block:</Text>
        <Text>{block.name}</Text>
      </View>
      <View className="w-full flex-row justify-between py-2">
        <Text>plot:</Text>
        <Text>{plot.name}</Text>
      </View>
      <View className="flex-row justify-between pt-2">
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
