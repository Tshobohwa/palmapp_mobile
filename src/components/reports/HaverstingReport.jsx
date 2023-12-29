import { FlatList } from "react-native";
import HaversterModal from "../../Modals/HaversterModal";
import HaverstingListItem from "../ListItems/HaverstingListItem";

const HaverstingReport = ({ items, navigation }) => {
  return (
    <>
      <HaversterModal />
      <FlatList
        data={items}
        renderItem={({ item }) => <HaverstingListItem item={item} />}
        keyExtractor={(item) => item.matricule}
      />
    </>
  );
};

export default HaverstingReport;
