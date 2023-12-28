import React from "react";
import { Modal, View } from "react-native";

const ModalWrapper = ({ visible, children }) => {
  return (
    <Modal visible={true} transparent={true}>
      <View className=" flex-1 bg-black/75 px-6">{children}</View>
    </Modal>
  );
};

export default ModalWrapper;
