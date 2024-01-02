import { View } from "react-native";
import FertilizationReport from "../components/reports/FertilizationReport";
import ScreenWrapper from "../components/shared/ScreenWrapper";
import WeedingReport from "../components/reports/WeedingReport";
import ManualWeedingReport from "../components/reports/ManualWeedingReport";
import { useSelector } from "react-redux";
import HaverstingReport from "../components/reports/HaverstingReport";
import PruningReport from "../components/reports/PruningReport";

const Report = ({ navigation }) => {
  const { operation_id } = useSelector((store) => store.user.user);
  const { workers } = useSelector((store) => store.workers);

  return (
    <ScreenWrapper>
      <View className=" flex-1  bg-leaft-light relative pt-[60px]">
        {(operation_id === 1 && (
          <HaverstingReport workers={workers} navigation={navigation} />
        )) ||
          (operation_id === 2 && <WeedingReport workers={workers} />) ||
          (operation_id === 3 && <ManualWeedingReport workers={workers} />) ||
          (operation_id === 4 && <FertilizationReport workers={workers} />) ||
          (operation_id === 5 && <PruningReport workers={workers} />)}
      </View>
    </ScreenWrapper>
  );
};

export default Report;
