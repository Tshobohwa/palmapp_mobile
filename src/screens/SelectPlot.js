import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/shared/SearchBar";
import NoItemMessage from "../components/shared/NoItemMessage";
import { db } from "../database/migrations";
import { useSelector } from "react-redux";
import PlotsList from "../components/lists/PlotsList";
import Loading from "../components/shared/Loading";

const SelectPlot = ({ navigation }) => {
  const { currentReport } = useSelector((store) => store.reports);
  console.log(currentReport);
  const blockId = currentReport.block.id;
  const [loading, setLoading] = useState(true);
  const [plots, setPlots] = useState([]);
  const [filteredPlots, setFilteredPlots] = useState(plots);

  const queryPlots = () => {
    console.log("start query");
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT  * FROM plots WHERE block_id = ?",
        [blockId],
        (_, { rows }) => {
          const respons = rows._array;
          setPlots(respons);
          setFilteredPlots(respons);
          setLoading(false);
        }
      );
    });
  };

  useEffect(() => queryPlots(), []);

  const onSearchHandler = (text) => {
    setFilteredPlots(plots.filter((plot) => plot.name.includes(text)));
  };

  return (
    <View className="h-full w-full">
      <SearchBar
        placeholder={"Search plot"}
        onSearchHandler={onSearchHandler}
      />
      <View className="mt-[50px]">
        {(loading && <Loading />) || filteredPlots.length ? (
          <PlotsList items={filteredPlots} navigation={navigation} />
        ) : (
          <NoItemMessage message={"No matching plot !"} />
        )}
      </View>
    </View>
  );
};

export default SelectPlot;
