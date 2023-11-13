import { View, FlatList } from "react-native";
import { setCurrentReportPlot } from "../../redux/reports/reportsSlice";
import { useDispatch } from "react-redux";
import ListItem from "../listItems/ListItem";

const PlotsList = ({ items, navigation }) => {
  const dispatch = useDispatch();
  return (
    <View className="mt-[20px] w-[100vw]">
      <FlatList
        data={items}
        renderItem={({ item }) => {
          const onPressHandler = () => {
            dispatch(setCurrentReportPlot(item));
            navigation.navigate("confirmNewForm");
          };
          return <ListItem item={item} onPressHandler={onPressHandler} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PlotsList;
