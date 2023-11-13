import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { db } from "../../database/migrations";

const HaverstingFormItem = ({ loadingZone, haversterId, reportId }) => {
  const [ripeBunches, setRipeBunches] = useState(0);
  const [unRipeBunches, setUnripeBunches] = useState(0);
  const ripeBunchesInputChangeTextHandler = (text) => {
    if (!Number.isFinite(+text)) return;
    setRipeBunches(+text);
  };
  const unRipeBunchesInputChangeTextHandler = (text) => {
    if (!Number.isFinite(+text)) return;
    setUnripeBunches(+text);
  };

  const getHaverstingData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM HAVERSTING WHERE report_id = ? AND worker_matricule = ? AND loading_zone = ?",
        [reportId, haversterId, loadingZone],
        (_, { rows }) => {
          const data = rows.data;
        },
        (error) => {}
      );
    });
  };

  const textInputsBlurHandler = () => {};

  return (
    <View className="flex-row w-full items-center justify-center">
      <View>
        <Text>{`Zone ${loadingZone}`}</Text>
      </View>
      <View>
        <TextInput
          value={ripeBunches.toString()}
          onChangeText={ripeBunchesInputChangeTextHandler}
          onBlur={textInputsBlurHandler}
        />
      </View>
      <View>
        <TextInput
          value={unRipeBunches.toString()}
          onChangeText={unRipeBunchesInputChangeTextHandler}
          onBlur={textInputsBlurHandler}
        />
      </View>
    </View>
  );
};

export default HaverstingFormItem;
