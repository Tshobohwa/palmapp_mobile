import { View, FlatList } from "react-native";
import WeederItem from "../listItems/WeederItem";

const WeedersList = ({ items }) => {
  return (
    <View className=" w-[100vw]">
      <FlatList
        data={items}
        renderItem={({ item }) => <WeederItem item={item} />}
        keyExtractor={(item) => item.matricule}
      />
    </View>
  );
};

export default WeedersList;
