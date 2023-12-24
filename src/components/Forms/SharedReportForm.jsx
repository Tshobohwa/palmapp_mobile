import React from "react";
import { Text, TextInput, View } from "react-native";

const SharedReportForm = ({ item }) => {
  return (
    <View className=" w-full border border-[#d3d3d3] bg-white rounded-md my-2 p-2">
      <View className=" w-full">
        <Text className="font-bold">{`${item.first_name} ${item.last_name}`}</Text>
        <Text className="font-bold text-leaf-300">{item.matricule}</Text>
      </View>
      <View className=" flex-row w-full justify-center">
        <View className=" w-full">
          <View className="mt-2 flex-row w-full h-[36px] bg-leaf-50 rounded-tl-md rounded-tr-md items-center">
            <View className="w-[33%] items-center justify-center h-full border border-leaf-300 rounded-tl-md">
              <Text>Trees</Text>
            </View>
            <View className="w-[34%] items-center justify-center h-full border-t border-b border-leaf-300">
              <Text className>Acres</Text>
            </View>
            <View className="w-[33%] items-center justify-center h-full border border-leaf-300 rounded-tr-md">
              <Text className>man day</Text>
            </View>
          </View>
          <View className="flex-row w-full h-[36p] rounded-tl-md rounded-tr-md items-center">
            <View className="flex-row w-full h-[36px] rounded-bl-md rounded-br-md items-center">
              <View className="w-[33%] items-center justify-center h-full border-r border-b border-l border-leaf-300 rounded-bl-md">
                <TextInput
                  className=" h-full w-full text-center"
                  placeholder="00"
                />
              </View>
              <View className="w-[34%] items-center justify-center h-full border-b border-leaf-300">
                <TextInput
                  className=" h-full w-full text-center"
                  placeholder="00"
                />
              </View>
              <View className="w-[33%] items-center justify-center h-full border-b border-r border-l border-leaf-300 rounded-br-md">
                <Text>{/* man day goes here */}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SharedReportForm;
