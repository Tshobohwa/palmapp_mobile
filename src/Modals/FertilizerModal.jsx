import React, { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setFertlizations } from "../redux/fertilizations/fertilizationsSlice";
import saveFertilizations from "../db/insertQueries/saveFertilization";

const FertilizerModal = ({ modalOpened, closeModal, fertilization }) => {
  const dispatch = useDispatch();

  const { workers } = useSelector((store) => store.workers);
  const { fertilizations } = useSelector((store) => store.fertilizations);

  const [worker, setWorker] = useState({});
  const [trees, setTrees] = useState(0);
  const [acres, setAcres] = useState(0);

  useEffect(() => {
    setWorker(
      workers.find(
        (worker) => worker.matricule === fertilization?.worker_matricule
      )
    );
  }, [workers, fertilization]);

  const treesChangeHandler = (text) => {
    setTrees(+text);
  };

  const acresChangeHandler = (text) => {
    setAcres(+text);
  };

  const submitHandler = () => {
    const updateFertilizations = (newFertilization) => {
      const newFertilizations = fertilizations.map((fer) =>
        fer.worker_matricule === newFertilization.worker_matricule
          ? newFertilization
          : fer
      );
      dispatch(setFertlizations(newFertilizations));
      closeModal();
    };
    const newFertilization = { ...fertilization, trees, acres };
    saveFertilizations({ newFertilization, updateFertilizations });
  };

  useEffect(() => {
    setAcres(fertilization?.acres);
    setTrees(fertilization?.trees);
  }, [fertilization]);
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
                keyboardType="numeric"
                value={`${trees}`}
                onChangeText={treesChangeHandler}
              />
            </View>
            <View className=" w-[50%] h-full items-center justify-center rounded-br-lg border border-leaf-300 border-t-0 border-l-0">
              <TextInput
                className=" w-full h-full text-center"
                keyboardType="numeric"
                value={`${acres}`}
                onChangeText={acresChangeHandler}
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

export default FertilizerModal;
