import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const HaverstingListItem = ({ item, navigation }) => {
  const { currentReport } = useSelector((store) => store.reports);
  console.log(currentReport);
  const [ripesBunches, setRipeBunches] = useState(0);
  const [greenBunches, setGreenBunches] = useState(0);
  const [manDay, setManDay] = useState(0);
  const [penality, setPenality] = useState(0);

  const onPressHandler = () => {
    navigation.navigate("Haverster Form");
  };

  useEffect(() => {
    setRipeBunches(
      item.haversts.reduce(
        (ripeBunches, haversts) => ripeBunches + haversts.ripe_bunches,
        0
      )
    );
    setGreenBunches(
      item.haversts.reduce(
        (greenBunches, haversts) => greenBunches + haversts.unripe_bunches,
        0
      )
    );
  }, [item.haversts]);

  useEffect(() => {
    setManDay((ripesBunches - greenBunches) / currentReport.man_day);
    setPenality(greenBunches * currentReport.penality);
  }, [ripesBunches, greenBunches]);

  return (
    <TouchableOpacity
      className=" w-[94%] border border-[#d3d3d3] bg-white rounded-md my-2 p-2 mx-[3%]"
      onPress={onPressHandler}
    >
      <View className=" w-full py-2">
        <Text className="font-bold">{`${item.first_name} ${item.last_name}`}</Text>
        <Text className="font-bold text-leaf-300">{item.matricule}</Text>
      </View>
      <View className=" flex-row w-full border-t justify-between border-leaf-50 py-2">
        <View>
          <Text>ripe bunches: {ripesBunches}</Text>
          <Text>green bunches: {greenBunches}</Text>
        </View>
        <View className=" items-end">
          <Text>man day: {manDay}</Text>
          <Text>penality: {penality}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HaverstingListItem;
