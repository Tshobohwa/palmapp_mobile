import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const HaversterTableRow = ({ haverst, i }) => {
  return (
    <TouchableOpacity className=" w-full flex-row h-[50px] ">
      <View
        className={` w-[33%] items-center justify-center h-full border border-leaf-300 border-t-0 ${
          i % 2 !== 0 ? " bg-[#f3f3f3]" : ""
        }`}
      >
        <Text>{haverst.loading_zone}</Text>
      </View>
      <View
        className={` w-[33%] items-center justify-center h-full border border-leaf-300 border-l-0 border-r-0  border-t-0 ${
          i % 2 !== 0 ? " bg-[#f3f3f3]" : ""
        }`}
      >
        <Text>{haverst.ripe_bunches}</Text>
      </View>
      <View
        className={` w-[33%] items-center justify-center h-full border border-leaf-300  border-t-0 ${
          i % 2 !== 0 ? " bg-[#f3f3f3]" : ""
        }`}
      >
        <Text>{haverst.green_bunches}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HaversterTableRow;
