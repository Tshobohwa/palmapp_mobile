import { View, Text } from "react-native";

const NoItemMessage = ({ message }) => {
  return (
    <View className="h-full w-full items-center justify-center">
      <Text className="text-red-500 font-bold text-lg">{message}</Text>
    </View>
  );
};

export default NoItemMessage;
