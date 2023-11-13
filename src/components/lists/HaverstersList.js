import { FlatList, View } from "react-native";
import HaversterItem from "../listItems/HaversterItem";

const HaverstersList = ({ items }) => {
  return (
    <View className="w-full">
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <HaversterItem key={item.matricule} item={item} />
        )}
        keyExtractor={(item) => item.matricule}
      />
    </View>
  );
};

export default HaverstersList;
