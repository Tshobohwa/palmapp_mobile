import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import HaversterTableRow from "../ListItems/HaversterTableRow";
import { useSelector } from "react-redux";

const HaversterReport = () => {
  const { currentReport } = useSelector((store) => store.reports);
  const { haversts, currentHaverster } = useSelector((store) => store.haversts);
  const [ripesBunches, setRipeBunches] = useState(0);
  const [greenBunches, setGreenBunches] = useState(0);
  const [manDay, setManDay] = useState(0);
  const [penality, setPenality] = useState(0);
  const [currentHaversts, setCurrentHaversts] = useState([]);

  useEffect(() => {
    setCurrentHaversts(
      haversts.filter(
        (haverst) => haverst.worker_matricule === currentHaverster.matricule
      )
    );
  }, [haversts, currentHaverster]);

  useEffect(() => {
    setRipeBunches(
      currentHaversts.reduce(
        (ripeBunches, haverst) => ripeBunches + haverst.ripe_bunches,
        0
      )
    );
    setGreenBunches(
      currentHaversts.reduce(
        (greenBunches, haversts) => greenBunches + haversts.unripe_bunches,
        0
      )
    );
  }, [currentHaversts]);

  useEffect(() => {
    setManDay((ripesBunches - greenBunches) / currentReport.man_day);
    setPenality(greenBunches * currentReport.penality);
  }, [ripesBunches, greenBunches]);

  return (
    <ScrollView className=" flex-1 pt-6 bg-leaft-light">
      <View className="border-2  border-[#d3d3d3] ml-[3%] mr-[4%] px-[2%] rounded-md bg-white">
        <View className=" w-full flex-row justify-between items-center">
          <View className="my-4">
            <Text className=" font-bold">
              {currentHaverster?.first_name + " " + currentHaverster?.last_name}
            </Text>
            <Text className=" font-bold text-leaf-300">
              {currentHaverster?.matricule}
            </Text>
          </View>
          <Image
            source={require("../../assets/images/palmapp-logo.png")}
            className=" h-[50px] w-[50px]"
          />
        </View>
        <View className="w-full px-2 flex-row justify-between border-t border-[#d3d3d3]">
          <View className="my-4">
            <Text className=" font-bold">ripe bunches: {ripesBunches} </Text>
            <Text className=" font-bold">green bunches: {greenBunches} </Text>
          </View>
          <View className=" my-4 items-end">
            <Text className=" font-bold">man-day: {manDay} </Text>
            <Text className=" font-bold">penality: {penality} </Text>
          </View>
        </View>
      </View>
      <View className="w-full px-4 mt-5 mb-10 bg-white">
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
        {currentHaversts.map((haverst, i) => (
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
