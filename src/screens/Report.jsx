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
  const [filteredWorkers, setfilteredWorkers] = useState(workers);

  // const onSearchHandler = (text) => {
  //   console.log(text);
  //   setfilteredWorkers(
  //     workers.map(
  //       (worker) =>
  //         `${worker.first_name} ${worker.last_name}`.includes(text) ||
  //         `${worker.matricule}`.includes(text)
  //     )
  //   );
  // };

  return (
    <ScreenWrapper>
      <View className=" flex-1  bg-leaft-light relative pt-[60px]">
        {(operation_id === 1 && (
          <HaverstingReport workers={filteredWorkers} navigation={navigation} />
        )) ||
          (operation_id === 2 && <WeedingReport workers={filteredWorkers} />) ||
          (operation_id === 3 && (
            <ManualWeedingReport workers={filteredWorkers} />
          )) ||
          (operation_id === 4 && (
            <FertilizationReport workers={filteredWorkers} />
          )) ||
          (operation_id === 5 && <PruningReport workers={filteredWorkers} />)}
      </View>
    </ScreenWrapper>
  );
};

export default Report;
