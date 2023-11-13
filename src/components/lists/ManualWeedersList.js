import { View, FlatList } from "react-native";
import ManualWeederItem from "../listItems/ManualWeederItem";

const ManualWeedersList = ({ items }) => {
  return (
    <View className=" w-[100vw]">
      <FlatList
        data={items}
        renderItem={({ item }) => <ManualWeederItem item={item} />}
        keyExtractor={(item) => item.matricule}
      />
    </View>
  );
};

export default ManualWeedersList;
