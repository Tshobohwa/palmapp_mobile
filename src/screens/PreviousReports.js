import { View, Text } from "react-native";
import { db } from "../database/migrations";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchBar from "../components/shared/SearchBar";
import PreviousReportsList from "../components/lists/PreviousReportsList";

const PreviousReports = ({ navigation }) => {
  const { user } = useSelector((store) => store.user);
  const [reports, setReports] = useState([]);
  const queryReports = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM reports WHERE supervisor_matricule = ? ORDER BY date DESC",
        [user.matricule],
        (_, { rows }) => {
          const respons = rows._array;
          setReports(respons);
        },
        (error) => {
          console.log("An error occured");
        }
      );
    });
  };
  useEffect(() => {
    queryReports();
  }, []);

  return (
    <View className="flex-1 items-center">
      <SearchBar placeholder={"Search report"} onSearchHandler={() => {}} />
      <PreviousReportsList items={reports} navigation={navigation} />
    </View>
  );
};

export default PreviousReports;
