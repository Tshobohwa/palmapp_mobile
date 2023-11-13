import { View, FlatList } from "react-native";
import FertilizationItem from "../listItems/FertilizationItem";

const FertilizationsList = ({ items }) => {
  return (
    <View className=" w-[100vw]">
      <FlatList
        data={items}
        renderItem={({ item }) => <FertilizationItem item={item} />}
        keyExtractor={(item) => item.matricule}
      />
    </View>
  );
};

export default FertilizationsList;
