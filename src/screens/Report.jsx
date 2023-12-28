import { View } from "react-native";
import FertilizationReport from "../components/reports/FertilizationReport";
import ScreenWrapper from "../components/shared/ScreenWrapper";
import WeedingReport from "../components/reports/WeedingReport";
import ManualWeedingReport from "../components/reports/ManualWeedingReport";
import SearchBar from "../components/shared/SearchBar";

const Report = () => {
  return (
    <ScreenWrapper>
      <View className=" flex-1  bg-leaft-light relative pt-[60px]">
        <SearchBar />
        <ManualWeedingReport />
      </View>
    </ScreenWrapper>
  );
};

export default Report;
