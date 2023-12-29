import { View } from "react-native";
import FertilizationReport from "../components/reports/FertilizationReport";
import ScreenWrapper from "../components/shared/ScreenWrapper";
import WeedingReport from "../components/reports/WeedingReport";
import ManualWeedingReport from "../components/reports/ManualWeedingReport";
import SearchBar from "../components/shared/SearchBar";
import { useSelector } from "react-redux";
import HaverstingReport from "../components/reports/HaverstingReport";
import PruningReport from "../components/reports/PruningReport";
import { useState } from "react";

const Report = ({ navigation }) => {
  const { operation_id } = useSelector((store) => store.user.user);
  const { workers } = useSelector((store) => store.workers);

  const [items, setItems] = useState(workers);
  return (
    <ScreenWrapper>
      <View className=" flex-1  bg-leaft-light relative pt-[60px]">
        <SearchBar />
        {(operation_id === 1 && (
          <HaverstingReport items={items} navigation={navigation} />
        )) ||
          (operation_id === 2 && <WeedingReport items={items} />) ||
          (operation_id === 3 && <ManualWeedingReport items={items} />) ||
          (operation_id === 4 && <FertilizationReport items={items} />) ||
          (operation_id === 5 && <PruningReport items={items} />)}
      </View>
    </ScreenWrapper>
  );
};

export default Report;
