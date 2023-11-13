import { KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { db } from "../../database/migrations";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PrunersList from "../../components/lists/PrunersList";

const PruningForm = ({ navigation }) => {
  const { currentReport } = useSelector((store) => store.reports);
  const [pruners, setPruners] = useState([]);
  const queryWorkers = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM workers WHERE operation_id = ?",
        [currentReport.operation.id],
        (_, { rows }) => {
          const pruners = rows._array.map((pruner) => ({
            firstName: pruner.first_name,
            lastName: pruner.last_name,
            matricule: pruner.marticule,
          }));
          setPruners(pruners);
        }
      );
    });
  };
  useEffect(() => queryWorkers(), []);
  return (
    <KeyboardAvoidingView className="flex-1" behavior="height">
      <PrunersList items={pruners} navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

export default PruningForm;
