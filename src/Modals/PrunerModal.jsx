import React from "react";
import ModalWrapper from "./ModalWrapper";
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";

const PrunerModal = () => {
  return (
    <ModalWrapper>
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
              <TextInput className=" w-full h-full text-center" />
            </View>
          </View>
        </View>
        <View className="w-full flex-row justify-between items-center">
          <TouchableOpacity className=" h-[50px] w-[45%] border border-leaf-300 rounded-md flex items-center justify-center">
            <Text className=" font-bold">discard</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" h-[50px] w-[45%] flex items-center justify-center bg-leaf-300 rounded-md">
            <Text className=" text-white font-bold">submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ModalWrapper>
  );
};

export default PrunerModal;
