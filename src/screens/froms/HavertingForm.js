import React, { useEffect, useState } from "react";
import { View } from "react-native";
import SearchBar from "../../components/shared/SearchBar";
import { db } from "../../database/migrations";
import HaverstersList from "../../components/lists/HaverstersList";

const HavertingForm = ({ navigation }) => {
  const [haversters, setHaversters] = useState([]);
  const queryHaversters = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM workers",
        [],
        (_, { rows }) => {
          const haversters = rows._array.map((haverster) => ({
            firstName: haverster.first_name,
            lastName: haverster.last_name,
            matricule: haverster.marticule,
            work: [],
          }));
          setHaversters(haversters);
        },
        (error) => {}
      );
    });
  };
  useEffect(() => {
    queryHaversters();
  }, []);
  return (
    <View className="w-full h-full">
      <SearchBar placeholder={"search haverster"} />
      <View className="mt-[60px]">
        <HaverstersList items={haversters} navigation={navigation} />
      </View>
    </View>
  );
};

export default HavertingForm;
