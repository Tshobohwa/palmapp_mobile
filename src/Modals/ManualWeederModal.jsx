import React, { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setManualWeedings } from "../redux/manualWeedings/manualWeedingsSlice";
import saveManualWeeding from "../db/insertQueries/saveManualWeeding";

const ManualWeederModal = ({ modalOpened, closeModal, manualWeeding }) => {
  const dispatch = useDispatch();

  const { workers } = useSelector((store) => store.workers);
  const { manualWeedings } = useSelector((store) => store.manualWeedings);

  const [trees, setTrees] = useState(0);
  const [acres, setAcres] = useState(0);

  const [worker, setWorker] = useState({});

  const discardHandler = () => {
    closeModal();
  };

  const submitHandler = () => {
    const newManualWeeding = { ...manualWeeding, trees: trees, acres: acres };
    const updateManualWeedings = () => {
      const newManualWeedings = manualWeedings.map((mWeeding) =>
        mWeeding.worker_matricule === newManualWeeding.worker_matricule
          ? newManualWeeding
          : mWeeding
      );
      dispatch(setManualWeedings(newManualWeedings));
      closeModal();
    };
    saveManualWeeding(newManualWeeding, updateManualWeedings);
  };

  const treesChangeHandler = (text) => {
    setTrees(+text);
  };

  const acresChangeHandler = (text) => {
    setAcres(+text);
  };

  useEffect(() => {
    setWorker(
      workers.find(
        (worker) => worker.matricule === manualWeeding.worker_matricule
      )
    );
  }, [workers]);

  useEffect(() => {
    setAcres(manualWeeding?.acres);
    setTrees(manualWeeding?.trees);
  }, [manualWeeding]);

  return (
    <ModalWrapper visible={modalOpened}>
      <View className="w-full rounded-lg bg-white p-4 mt-[100px]">
        <View className=" w-full h-[60px] flex-row justify-between">
          <View className=" h-full">
            <Text className=" font-bold">
              {worker?.first_name + " " + worker?.last_name}
            </Text>
            <Text className=" font-bold text-leaf-300">
              {worker?.matricule}
            </Text>
          </View>
          <Image
            source={require("../assets/images/palmapp-logo.png")}
            className=" h-[40px] w-[40px]"
          />
        </View>
        <View className="w-full mb-4">
          <View className="w-full flex-row h-[40px]">
            <View className=" w-[50%] h-full items-center justify-center rounded-tl-lg bg-leaf-50 border border-leaf-300">
              <Text className=" font-bold">trees</Text>
            </View>
            <View className=" w-[50%] h-full items-center justify-center rounded-tr-lg bg-leaf-50 border border-leaf-300 border-l-0">
              <Text className=" font-bold">acres </Text>
            </View>
          </View>
          <View className="w-full flex-row h-[40px]">
            <View className=" w-[50%] h-full items-center justify-center rounded-bl-lg border border-leaf-300 border-t-0">
              <TextInput
                className=" w-full h-full text-center"
                onChangeText={treesChangeHandler}
                value={`${trees}`}
                keyboardType="numeric"
              />
            </View>
            <View className=" w-[50%] h-full items-center justify-center rounded-br-lg border border-leaf-300 border-t-0 border-l-0">
              <TextInput
                className=" w-full h-full text-center"
                onChangeText={acresChangeHandler}
                value={`${acres}`}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        <View className="w-full flex-row justify-between items-center">
          <TouchableOpacity
            className=" h-[50px] w-[45%] border border-leaf-300 rounded-md flex items-center justify-center"
            onPress={discardHandler}
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

export default ManualWeederModal;
