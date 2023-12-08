import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

const Loading = () => {
  const dotSize1 = useRef(new Animated.Value(0)).current;
  const dotSize2 = useRef(new Animated.Value(0)).current;
  const dotSize3 = useRef(new Animated.Value(0)).current;

  const animateDotSize = () => {
    Animated.parallel([
      Animated.sequence([
        Animated.timing(dotSize1, {
          toValue: 20,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(dotSize1, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]),
      Animated.sequence([
        Animated.timing(dotSize2, {
          toValue: 20,
          duration: 500,
          useNativeDriver: false,
          delay: 250,
        }),
        Animated.timing(dotSize2, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]),
      Animated.sequence([
        Animated.timing(dotSize3, {
          toValue: 20,
          duration: 500,
          useNativeDriver: false,
          delay: 500,
        }),
        Animated.timing(dotSize3, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]),
    ]).start(() => animateDotSize());
  };

  useEffect(() => {
    animateDotSize();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ flexDirection: "row", gap: 4 }}>
        <View className=" w-[20px] flex items-center justify-center">
          <Animated.View
            style={{
              width: dotSize1,
              height: dotSize1,
              backgroundColor: "#048444",
              borderRadius: 10,
            }}
          />
        </View>
        <View className=" w-[20px] flex items-center justify-center">
          <Animated.View
            style={{
              width: dotSize2,
              height: dotSize2,
              backgroundColor: "#048444",
              borderRadius: 10,
            }}
          />
        </View>
        <View className=" w-[20px] flex items-center justify-center">
          <Animated.View
            style={{
              width: dotSize3,
              height: dotSize3,
              backgroundColor: "#048444",
              borderRadius: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Loading;
