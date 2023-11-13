import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";

const HaversterItem = ({ item }) => {
  const { currentReport } = useSelector((store) => store.reports);
  return (
    <View className="w-full px-2">
      <View className="p-3 rounded-md my-1 bg-white shadow-md shadow-leaf-300">
        <View className="w-[100%] p-2 flex-row justify-between items-center border-b border-b-leaf-100">
          <View>
            <Text className="text-lg font-bold">
              {item.firstName + " " + item.lastName}
            </Text>
            <Text className="text-leaf-300">{item.matricule}</Text>
          </View>
          <TouchableOpacity>
            <FontAwesome name="pencil-square-o" size={48} color="#048444" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between w-full items-center h-[60px]">
          <View>
            <View className="flex-row items-center gap-2">
              <Text>ripe bunches: 15</Text>
              <MaterialCommunityIcons
                name="fruit-grapes"
                size={16}
                color="red"
              />
            </View>
            <View className="flex-row items-center gap-2">
              <Text>unripe bunches: 2</Text>
              <MaterialCommunityIcons
                name="fruit-grapes"
                size={16}
                color="#048444"
              />
            </View>
          </View>
          <View className="items-end">
            <View className="flex-row items-center gap-2">
              <Text>penality: 6</Text>
              <MaterialCommunityIcons name="whistle" size={16} color="red" />
            </View>
            <View className="flex-row items-center gap-2">
              <Text>Homme jour: 0.1</Text>
              <Foundation name="dollar-bill" size={16} color="#048444" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HaversterItem;
