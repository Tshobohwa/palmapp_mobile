import { View, FlatList } from "react-native";
import PrunerItem from "../listItems/PrunerItem";

const PrunersList = ({ items, navigation }) => {
  return (
    <View className=" w-[100vw]">
      <FlatList
        data={items}
        renderItem={({ item }) => <PrunerItem item={item} />}
        keyExtractor={(item) => item.matricule}
      />
    </View>
  );
};

export default PrunersList;
