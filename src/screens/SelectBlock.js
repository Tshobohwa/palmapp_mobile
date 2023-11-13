import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/shared/SearchBar";
import NoItemMessage from "../components/shared/NoItemMessage";
import { db } from "../database/migrations";
import BlocksList from "../components/lists/BlocksList";
import Loading from "../components/shared/Loading";

const SelectBlock = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [blocks, setBlocks] = useState([]);
  const [filteredBlocks, setFilteredBlocks] = useState(blocks);

  const queryBlocks = () => {
    db.transaction((tx) => {
      tx.executeSql("SELECT  * FROM blocks", null, (_, { rows }) => {
        const respons = rows._array;
        setBlocks(respons);
        setFilteredBlocks(respons);
        setLoading(false);
      });
    });
  };

  useEffect(() => queryBlocks(), []);

  const onSearchHandler = (text) => {
    setFilteredBlocks(blocks.filter((block) => block.name.includes(text)));
  };

  return (
    <View className="h-full w-full">
      <SearchBar
        placeholder={"Search block"}
        onSearchHandler={onSearchHandler}
      />
      <View className="mt-[50px]">
        {(loading && <Loading />) || filteredBlocks.length ? (
          <BlocksList items={filteredBlocks} navigation={navigation} />
        ) : (
          <NoItemMessage message={"No matching block !!!"} />
        )}
      </View>
    </View>
  );
};

export default SelectBlock;
