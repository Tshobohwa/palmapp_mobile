import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const HaversterForm = () => {
  const { currentReport } = useSelector((store) => store.reports);
  return (
    <View className="flex-1">
      <View className="w-full sticky top-0 bg-white">
        <Text className="font-bold text-lg">{`${haverster.firstName} ${haverster.lastName}`}</Text>
        <Text className="text-lg text-leaf-300">{haverster.matricule}</Text>
      </View>
      <View className="pt-2">
        <View></View>
      </View>
    </View>
  );
};

export default HaversterForm;
