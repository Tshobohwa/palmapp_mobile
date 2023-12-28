import {
  ImageBackground,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenWrapper from "../components/shared/ScreenWrapper";
import { useEffect, useState } from "react";
import SelectList from "../components/shared/SelectList";
import blocks from "../data/blocks";
import { plots } from "../data/plots";

const StartReport = ({ navigation }) => {
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [items, setItems] = useState([]);
  const [currentBlock, setCurrentBlock] = useState({});
  const [listName, setListName] = useState("");
  const [currentPlot, setCurrentPlot] = useState({});
  const [filteredPlots, setFilteredPlots] = useState([]);
  const currentDate = new Date();
  const date = currentDate.toISOString().split("T")[0];

  const filterPlots = (blockId) => {
    setFilteredPlots(plots.filter((plot) => plot.blockId === blockId));
  };

  const closeModal = () => {
    setShowSelectModal(false);
  };

  const OpenBlockPicker = () => {
    setListName("block");
    setItems(blocks);
    setShowSelectModal(true);
  };

  const openPlotsPicker = () => {
    setListName("plot");
    setItems(filteredPlots);
    setShowSelectModal(true);
  };

  const discardHandler = () => {
    navigation.navigate("home");
  };

  const startHandler = () => {
    navigation.navigate("New Report");
  };

  useEffect(() => {
    setCurrentBlock(blocks[0]);
    filterPlots(currentBlock.id);
    setCurrentPlot(filteredPlots[0]);
  }, [blocks]);

  useEffect(() => {
    filterPlots(currentBlock.id);
  }, [currentBlock]);

  useEffect(() => {
    setCurrentPlot(filteredPlots[0]);
  }, [filteredPlots]);

  useEffect(() => {
    filterPlots(currentBlock.id);
  }, [currentBlock]);

  return (
    <>
      <SelectList
        visible={showSelectModal}
        listName={listName}
        items={items}
        closeModal={closeModal}
        setCurrentBlock={setCurrentBlock}
        setCurrentPlot={setCurrentPlot}
      />
      <ScreenWrapper>
        <ImageBackground
          source={require("../assets/images/palmplantation.jpg")}
          className=" flex-1 items-center justify-center"
        >
          <SafeAreaView className="p-3 m-4 rounded-xl justify-center bg-white">
            <View className=" mb-5 w-full flex-row justify-between">
              <Text className=" font-bold text-lg text-leaf-300 w-[50%]">
                New report
              </Text>
              <View className=" w-[50%] items-end justify-end">
                <Text>{date}</Text>
              </View>
            </View>
            <View className="flex-row items-center my-2">
              <Text className="w-[25%]">man day: </Text>
              <TextInput
                className=" placeholder:text-black bg-leaf-50 h-[50px] rounded-lg w-[75%] text-center"
                placeholder="00"
              />
            </View>
            <View className="flex-row items-center my-2">
              <Text className=" w-[25%]">penality: </Text>
              <TextInput
                className=" placeholder:text-black bg-leaf-50 h-[50px] rounded-lg w-[75%] text-center"
                placeholder="00"
              />
            </View>
            <View className="flex-row items-center my-2">
              <Text className=" w-[25%]">block: </Text>
              <TouchableOpacity
                className="flex flex-row items-center w-[75%] bg-leaf-50 h-[50px] rounded-lg justify-between px-3"
                onPress={OpenBlockPicker}
              >
                <Text>{currentBlock?.name} </Text>
                <Image
                  source={require("../assets/images/arrow.png")}
                  className=" h-[16px] w-[16px]"
                />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-between my-4">
              <Text>plot: </Text>
              <TouchableOpacity
                className="flex flex-row items-center w-[75%] bg-leaf-50 h-[50px] rounded-lg justify-between px-3"
                onPress={openPlotsPicker}
              >
                <Text>{currentPlot?.name}</Text>
                <Image
                  source={require("../assets/images/arrow.png")}
                  className=" h-[16px] w-[16px]"
                />
              </TouchableOpacity>
            </View>
            <View className="w-full flex-row justify-between">
              <TouchableOpacity
                className=" w-[49%] h-[50px] items-center justify-center rounded-md border border-leaf-300"
                onPress={discardHandler}
              >
                <Text className=" font-bold">Discard</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className=" w-[49%] h-[50px] items-center justify-center rounded-md bg-leaf-300"
                onPress={startHandler}
              >
                <Text className=" font-bold text-white">Start</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </ScreenWrapper>
    </>
  );
};

export default StartReport;
