import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  openHaversterModal,
  setCurrentHaverst,
} from "../../redux/haversts/haverstsSlice";
import HaversterModal from "../../Modals/HaversterModal";

const HaversterTableRow = ({ haverst, i }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const rowPressHandler = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  return (
    <>
      <HaversterModal
        modalOpened={modalOpened}
        closeModal={closeModal}
        currentHaverst={haverst}
      />
      <TouchableOpacity
        className=" w-full flex-row h-[50px] "
        onPress={rowPressHandler}
      >
        <View
          className={` w-[33%] items-center justify-center h-full border border-leaf-300 border-t-0 ${
            i % 2 !== 0 ? " bg-[#f3f3f3]" : ""
          }`}
        >
          <Text>{haverst.loading_zone}</Text>
        </View>
        <View
          className={` w-[33%] items-center justify-center h-full border border-leaf-300 border-l-0 border-r-0  border-t-0 ${
            i % 2 !== 0 ? " bg-[#f3f3f3]" : ""
          }`}
        >
          <Text>{haverst?.ripe_bunches || 0}</Text>
        </View>
        <View
          className={` w-[33%] items-center justify-center h-full border border-leaf-300  border-t-0 ${
            i % 2 !== 0 ? " bg-[#f3f3f3]" : ""
          }`}
        >
          <Text>{haverst?.unripe_bunches || 0}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default HaversterTableRow;
