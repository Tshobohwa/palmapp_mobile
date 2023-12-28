import { TextInput, View } from "react-native";

const SearchBar = ({ placeholder, onSearchHandler }) => {
  return (
    <View className="w-full h-[60px] flex flex-row absolute top-0 items-center justify-center bg-leaf-300">
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#bed1bd"
        className="h-[44px] px-5 rounded-md bg-leaft-light w-[94%] shadow-md shadow-leaf-300 text-black"
        onChangeText={onSearchHandler}
      />
    </View>
  );
};

export default SearchBar;
