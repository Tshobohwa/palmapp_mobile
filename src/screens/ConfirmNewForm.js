import { Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../db/sqlite";
import { setNewReport } from "../redux/reports/reportsSlice";

const ConfirmNewForm = ({ navigation }) => {
  const { currentReport } = useSelector((store) => store.reports);
  const dispatch = useDispatch();
  const date = new Date(currentReport.date);
  function formatDateToAmerican(date) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString("en-US", options);
  }
  const saveNewReport = () => {
    const newReport = [
      currentReport.date,
      currentReport.date,
      currentReport.supervisor.matricule,
      currentReport.block.id,
      currentReport.plot.id,
      currentReport.operation.id,
      0,
    ];

    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO reports (id, date, supervisor_matricule, block_id, plot_id, operation_id, sent) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        newReport,
        (result) => {
          console.log(`report ${currentReport.date} saved succesfully`);
          navigation.navigate(currentReport.operation?.name.toLowerCase());
        },
        (error) => {
          console.log(`An error occured, couldn't save report `, newReport);
        }
      );
    });
  };

  const startReportButtonEventHandler = () => {
    dispatch(setNewReport());
    saveNewReport();
  };

  return (
    <View className="mt-5 w-full h-full flex items-center justify-center">
      <View className="w-[90vw] rounded-md bg-white shadow-md mt-[-15vh] shadow-leaf-300 p-2">
        <View className="m-2 pb-3 border-b border-leaf-100">
          <Text className="text-lg">Start new report form?</Text>
        </View>
        <View className="flex-row justify-between m-2">
          <Text className="text-lg">Date:</Text>
          <Text className="text-lg">{formatDateToAmerican(date)}</Text>
        </View>
        <View className="flex-row justify-between m-2">
          <Text className="text-lg">Supervisor:</Text>
          <Text className="text-lg">
            {`${currentReport.supervisor.firstName} ${currentReport.supervisor.lastName} `}
          </Text>
        </View>
        <View className="flex-row justify-between m-2">
          <Text className="text-lg">operation: </Text>
          <Text className="text-lg">{currentReport.operation.name}</Text>
        </View>
        <View className="flex-row justify-between m-2">
          <Text className="text-lg">Block:</Text>
          <Text className="text-lg">{currentReport.block.name}</Text>
        </View>
        <View className="flex-row justify-between m-2">
          <Text className="text-lg">Plot:</Text>
          <Text className="text-lg">{currentReport.plot.name}</Text>
        </View>
        <View className="flex-row justify-between border-t border-leaf-100">
          <TouchableOpacity className=" bg-leaf-50 rounded-md  h-[60px] items-center justify-center mt-5 w-[40vw]">
            <Text className="text-leaf-300 font-bold text-lg">modify</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-leaf-300 rounded-md  h-[60px] items-center justify-center mt-5 w-[40vw]"
            onPress={startReportButtonEventHandler}
          >
            <Text className="text-white font-bold text-lg">start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ConfirmNewForm;
