import { View } from "react-native";
import FertilizationReport from "../components/reports/FertilizationReport";
import ScreenWrapper from "../components/shared/ScreenWrapper";
import WeedingReport from "../components/reports/WeedingReport";
import ManualWeedingReport from "../components/reports/ManualWeedingReport";

const Report = () => {
  return (
    <ScreenWrapper>
      <View className=" flex-1  bg-leaft-light p-2 mt-20">
        <ManualWeedingReport />
      </View>
    </ScreenWrapper>
  );
};

export default Report;
