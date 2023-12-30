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
import formatDateToEnglish from "../helpers/formatDateToEnglish";
import { useDispatch, useSelector } from "react-redux";
import saveReport from "../db/insertQueries/saveReport";
import { setCurrentReport } from "../redux/reports/reportsSlice";
import selectBlocks from "../db/selectQueries/selectBlocks";
import { setBlocks } from "../redux/blocks/blocksSlice";
import { setPlots } from "../redux/plots/plotsSlice";
import selectPlots from "../db/selectQueries/selectPlots";

const StartReport = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { blocks } = useSelector((store) => store.blocks);
  const { plots } = useSelector((store) => store.plots);
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [items, setItems] = useState([]);
  const [currentBlock, setCurrentBlock] = useState({});
  const [listName, setListName] = useState("");
  const [currentPlot, setCurrentPlot] = useState({});
  const [filteredPlots, setFilteredPlots] = useState([]);
  const [manDay, setManDay] = useState();
  const [penality, setPenality] = useState();
  const currentDate = new Date();
  const date = currentDate.toISOString().split("T")[0];

  const filterPlots = (blockId) => {
    setFilteredPlots(plots.filter((plot) => plot.block_id === blockId));
  };

  const closeModal = () => {
    setShowSelectModal(false);
  };

  const manDayChangeHandler = (text) => {
    setManDay(+text);
    console.log(manDay);
  };

  const penalityChangeHandler = (text) => {
    setPenality(+text);
    console.log(penality);
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
    const gotoReportPage = () => {
      navigation.navigate("New Report");
    };

    const setReport = (report) => {
      dispatch(setCurrentReport(report));
    };
    const newReport = {
      report_id: `${user.id}${Date.now()}`,
      supervisor_id: user.id,
      operation_id: user.operation_id,
      date: date,
      block_id: currentBlock.id,
      plot_id: currentPlot.id,
      man_day: manDay,
      penality: penality,
    };
    saveReport(newReport, gotoReportPage, setReport);
  };

  useEffect(() => {
    const setCurrentBlocks = (blocks) => {
      dispatch(setBlocks(blocks));
    };
    const setCurrentPlots = (plots) => {
      dispatch(setPlots(plots));
    };
    selectBlocks(setCurrentBlocks);
    selectPlots(setCurrentPlots);
  }, []);

  useEffect(() => {
    setCurrentBlock(blocks[0]);
    filterPlots(currentBlock?.id);
    setCurrentPlot(filteredPlots[0]);
  }, [plots[0], blocks[0]]);

  useEffect(() => {
    filterPlots(currentBlock?.id);
  }, [currentBlock]);

  useEffect(() => {
    setCurrentPlot(filteredPlots[0]);
  }, [filteredPlots]);

  useEffect(() => {
    filterPlots(currentBlock?.id);
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
                <Text>{formatDateToEnglish(date)}</Text>
              </View>
            </View>
            <View className="flex-row items-center my-2">
              <Text className="w-[25%]">man day: </Text>
              <TextInput
                className=" placeholder:text-black bg-leaf-50 h-[50px] rounded-lg w-[75%] text-center"
                placeholder="00"
                keyboardType="numeric"
                onChangeText={manDayChangeHandler}
              />
            </View>
            <View className="flex-row items-center my-2">
              <Text className=" w-[25%]">penality: </Text>
              <TextInput
                className=" placeholder:text-black bg-leaf-50 h-[50px] rounded-lg w-[75%] text-center"
                placeholder="00"
                keyboardType="numeric"
                onChangeText={penalityChangeHandler}
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
