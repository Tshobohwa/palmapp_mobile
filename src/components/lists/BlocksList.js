import { View, FlatList } from "react-native";
import { setCurrentReportBlock } from "../../redux/reports/reportsSlice";
import { useDispatch } from "react-redux";
import ListItem from "../listItems/ListItem";

const BlocksList = ({ items, navigation }) => {
  const dispatch = useDispatch();
  return (
    <View className="mt-[20px] w-[100vw]">
      <FlatList
        data={items}
        renderItem={({ item }) => {
          const onPressHandler = () => {
            dispatch(setCurrentReportBlock(item));
            navigation.navigate("selectPlot");
          };
          return <ListItem item={item} onPressHandler={onPressHandler} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BlocksList;
