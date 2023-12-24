import React from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SelectList = ({
  visible,
  items,
  closeModal,
  setCurrentBlock,
  setCurrentPlot,
  listName,
}) => {
  const ListItem = ({ item }) => {
    const listItemPresshandler = () => {
      if (listName === "block") setCurrentBlock(item);
      if (listName === "plot") setCurrentPlot(item);
      closeModal();
    };
    return (
      <TouchableOpacity
        className=" w-full h-[50px] px-4 flex justify-center border-t border-leaf-50"
        onPress={listItemPresshandler}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Modal visible={visible} transparent={true}>
      <View className=" flex-1 h-[100vh] bg-black/75 items-center justify-center my-[-50px]">
        <View
          className=" w-[90%] bg-white rounded-2xl pb-4"
          style={{ elevation: 20 }}
        >
          <View className=" h-[50px] px-5 flex-row items-center justify-between">
            <Text className=" text-leaf-300 text-lg font-bold">
              Select {listName}
            </Text>
            <TouchableOpacity onPress={closeModal}>
              <Image
                source={require("../../assets/images/x.png")}
                className=" h-8 w-8"
              />
            </TouchableOpacity>
          </View>
          <ScrollView className=" w-full h-[200px]">
            {items.map((item) => {
              return <ListItem item={item} key={item.id} />;
            })}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default SelectList;
