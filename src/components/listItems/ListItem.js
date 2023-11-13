import { Text, TouchableOpacity, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const ListItem = ({ item, onPressHandler }) => {
  return (
    <View className="w-[100vw] items-center">
      <TouchableOpacity
        onPress={onPressHandler}
        className="h-[70px] w-[90vw] flex justify-center px-5 bg-white overflow-hidden shadow-md shadow-leaf-300 rounded-2xl my-2"
      >
        <Text className="text-lg">{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
