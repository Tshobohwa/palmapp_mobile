import { View } from "react-native";
import FertilizerModal from "../Modals/FertilizerModal";
import HaversterModal from "../Modals/HaversterModal";
import ManualWeederModal from "../Modals/ManualWeederModal";
import PrunerModal from "../Modals/PrunerModal";
import WeedingModal from "../Modals/WeedingModal";
import FertilizationReport from "../components/reports/FertilizationReport";

const CurrentReport = () => {
  return (
    <View className=" flex-1 bg-leaft-light">
      {/* Haversting report */}

      {/* Weeding report */}
      <WeedingModal />

      <FertilizationReport />
    </View>
  );
};

export default CurrentReport;
