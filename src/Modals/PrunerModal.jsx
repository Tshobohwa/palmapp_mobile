import React, { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setPrunings } from "../redux/prunings/PruningsSlice";
import savePruning from "../db/insertQueries/savePruning";

const PrunerModal = ({ modalOpened, closeModal, pruning }) => {
  const dispatch = useDispatch();

  const { prunings } = useSelector((store) => store.prunings);

  const [weight, setweight] = useState(0);

  const weightChangeHandler = (text) => {
    setweight(+text);
  };

  const discardHandler = () => {
    closeModal();
  };

  useEffect(() => {
    setweight(pruning?.weight);
  }, [pruning]);

  const submitHandler = () => {
    const updatePrunings = (pruning) => {
      const newPrunings = prunings.map((newPruning) =>
        newPruning.worker_matricule === pruning.worker_matricule
          ? pruning
          : newPruning
      );
      dispatch(setPrunings(newPrunings));
      closeModal();
    };
    const newPruning = { ...pruning, weight };
    savePruning(newPruning, updatePrunings);
  };

  return (
    <ModalWrapper visible={modalOpened}>
      <View className="w-full rounded-lg bg-white p-4 mt-[100px]">
        <View className=" w-full h-[60px] flex-row justify-between">
          <View className=" h-full">
            <Text className=" font-bold">worker 1 pruner</Text>
            <Text className=" font-bold text-leaf-300">202110272</Text>
          </View>
          <Image
            source={require("../assets/images/palmapp-logo.png")}
            className=" h-[40px] w-[40px]"
          />
        </View>
        <View className="w-full mb-4">
          <View className="w-full flex-row h-[40px] justify-center">
            <View className=" w-[70%] h-full items-center justify-center rounded-t-lg bg-leaf-50 border border-leaf-300">
              <Text className=" font-bold">weight </Text>
            </View>
          </View>
          <View className="w-full flex-row h-[40px] justify-center">
            <View className=" w-[70%] h-full items-center justify-center rounded-b-lg border border-leaf-300 border-t-0">
              <TextInput
                className=" w-full h-full text-center"
                keyboardType="numeric"
                value={`${weight}`}
                onChangeText={weightChangeHandler}
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

export default PrunerModal;
