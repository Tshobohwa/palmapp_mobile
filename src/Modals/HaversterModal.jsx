import React, { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setHaversts } from "../redux/haversts/haverstsSlice";
import saveHaverst from "../db/insertQueries/saveHaverst";

const HaversterModal = ({ currentHaverst, closeModal, modalOpened }) => {
  const dispatch = useDispatch();
  const { currentHaverster, haversts } = useSelector((store) => store.haversts);

  const [ripeBunches, setRipeBunches] = useState(currentHaverst.ripe_bunches);
  const [unripeBuches, setUnripeBunches] = useState(
    currentHaverst.unripe_bunches
  );

  const ripeBunchesChangeHandler = (text) => {
    setRipeBunches(+text);
  };
  const unripeBuchesChangeHandler = (text) => {
    setUnripeBunches(+text);
  };

  const discardHandler = () => {
    closeModal();
  };

  const submitHandler = () => {
    const updateHaversts = (newHaverst) => {
      const newHaversts = haversts.map((haver) =>
        haver.worker_matricule === newHaverst.worker_matricule &&
        haver.loading_zone === newHaverst.loading_zone
          ? newHaverst
          : haver
      );
      dispatch(setHaversts(newHaversts));
      closeModal();
    };
    const haverst = {
      ...currentHaverst,
      ripe_bunches: ripeBunches,
      unripe_bunches: unripeBuches,
    };
    saveHaverst(haverst, updateHaversts);
  };

  useEffect(() => {
    setRipeBunches(currentHaverst.ripe_bunches);
    setUnripeBunches(currentHaverst.unripe_bunches);
  }, [currentHaverst]);
  return (
    <ModalWrapper visible={modalOpened}>
      <View className="w-full rounded-lg bg-white p-4 mt-[100px]">
        <View className=" w-full h-[60px] flex-row justify-between">
          <View className=" h-full">
            <Text className=" font-bold">
              {currentHaverster.first_name + " " + currentHaverster.last_name}
            </Text>
            <Text className=" font-bold text-leaf-300">
              {currentHaverster.matricule}
            </Text>
          </View>
          <Image
            source={require("../assets/images/palmapp-logo.png")}
            className=" h-[40px] w-[40px]"
          />
        </View>
        <Text className=" w-full text-center font-bold my-4">
          Loading zone: {currentHaverst.loading_zone}
        </Text>
        <View className="w-full mb-4">
          <View className="w-full flex-row h-[40px]">
            <View className=" w-[50%] h-full items-center justify-center rounded-tl-lg bg-leaf-50 border border-leaf-300">
              <Text className=" font-bold">ripe bunches</Text>
            </View>
            <View className=" w-[50%] h-full items-center justify-center rounded-tr-lg bg-leaf-50 border border-leaf-300 border-l-0">
              <Text className=" font-bold">green bunches</Text>
            </View>
          </View>
          <View className="w-full flex-row h-[40px]">
            <View className=" w-[50%] h-full items-center justify-center rounded-bl-lg border border-leaf-300 border-t-0">
              <TextInput
                className=" w-full h-full text-center"
                keyboardType="numeric"
                value={`${ripeBunches}`}
                onChangeText={ripeBunchesChangeHandler}
              />
            </View>
            <View className=" w-[50%] h-full items-center justify-center rounded-br-lg border border-leaf-300 border-t-0 border-l-0">
              <TextInput
                className=" w-full h-full text-center"
                keyboardType="numeric"
                value={`${unripeBuches}`}
                onChangeText={unripeBuchesChangeHandler}
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

export default HaversterModal;
