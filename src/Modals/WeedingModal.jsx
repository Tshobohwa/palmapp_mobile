import React, { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import saveWeeding from "../db/insertQueries/saveWeeding";
import { setWeedings } from "../redux/weedings/weedingsSlice";

const WeedingModal = ({ opened, closeModal, weeder }) => {
  const dispatch = useDispatch();

  const { report_id } = useSelector((store) => store.reports.currentReport);
  const { weedings } = useSelector((store) => store.weedings);

  const [weeding, setWeeding] = useState({});
  const [trees, setTrees] = useState(0);
  const [acres, setAcres] = useState(0);

  const treesChangeHandler = (text) => {
    setTrees(+text);
  };

  const acresChangeHandler = (text) => {
    setAcres(+text);
  };

  const submitHandler = () => {
    const updateWeedings = (newWeeding) => {
      const newWeedings = weedings.map((weeding) =>
        weeding.worker_matricule === newWeeding.worker_matricule
          ? newWeeding
          : weeding
      );
      dispatch(setWeedings(newWeedings));
      closeModal();
    };
    saveWeeding({
      weeding: {
        report_id,
        trees,
        acres,
        worker_matricule: weeder.matricule,
      },
      updateWeedings,
    });
  };

  useEffect(() => {
    setWeeding(
      weedings.find((weeding) => weeding.worker_matricule === weeder.matricule)
    );
  }, [weedings]);

  useEffect(() => {
    if (!weeding) return;
    setTrees(weeding.trees);
    setAcres(weeding.acres);
  }, [weeding]);

  return (
    <ModalWrapper visible={opened}>
      <View className="w-full rounded-lg bg-white p-4 mt-[100px]">
        <View className=" w-full h-[60px] flex-row justify-between">
          <View className=" h-full">
            <Text className=" font-bold">
              {weeder.first_name + " " + weeder.last_name}
            </Text>
            <Text className=" font-bold text-leaf-300">{weeder.matricule}</Text>
          </View>
          <Image
            source={require("../assets/images/palmapp-logo.png")}
            className=" h-[40px] w-[40px]"
          />
        </View>
        <View className="w-full mb-4">
          <View className="w-full flex-row h-[40px]">
            <View className=" w-[50%] h-full items-center justify-center rounded-tl-lg bg-leaf-50 border border-leaf-300">
              <Text className=" font-bold">trees:</Text>
            </View>
            <View className=" w-[50%] h-full items-center justify-center rounded-tr-lg bg-leaf-50 border border-leaf-300 border-l-0">
              <Text className=" font-bold">acres: </Text>
            </View>
          </View>
          <View className="w-full flex-row h-[40px]">
            <View className=" w-[50%] h-full items-center justify-center rounded-bl-lg border border-leaf-300 border-t-0">
              <TextInput
                className=" w-full h-full text-center"
                value={`${trees}`}
                onChangeText={treesChangeHandler}
                keyboardType="numeric"
              />
            </View>
            <View className=" w-[50%] h-full items-center justify-center rounded-br-lg border border-leaf-300 border-t-0 border-l-0">
              <TextInput
                className=" w-full h-full text-center"
                value={`${acres}`}
                onChangeText={acresChangeHandler}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        <View className="w-full flex-row justify-between items-center">
          <TouchableOpacity
            className=" h-[50px] w-[45%] border border-leaf-300 rounded-md flex items-center justify-center"
            onPress={closeModal}
          >
            <Text className=" font-bold">discard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" h-[50px] w-[45%] flex items-center justify-center bg-leaf-300 rounded-md"
            onPress={submitHandler}
          >
            <Text className=" text-white font-bold">submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ModalWrapper>
  );
};
export default WeedingModal;
