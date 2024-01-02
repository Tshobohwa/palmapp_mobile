import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const SharedListItem = ({ item, openModal, data }) => {
  const { man_day } = useSelector((store) => store.reports.currentReport);
  return (
    <TouchableOpacity
      className=" w-[94%] border border-[#d3d3d3] bg-white rounded-md my-2 p-2 mx-[3%]"
      onPress={openModal}
    >
      <View className=" w-full my-2">
        <Text className="font-bold">{`${item?.first_name} ${item?.last_name}`}</Text>
        <Text className="font-bold text-leaf-300">{item?.matricule}</Text>
      </View>
      <View className=" flex-row w-full border-t justify-between border-leaf-50 py-2">
        <View>
          <Text>Trees: {data?.trees || 0}</Text>
          <Text>Acres: {data?.acres || 0}</Text>
        </View>
        <View>
          <Text>man day: {(data?.trees / man_day).toFixed(2) || 0}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SharedListItem;
