import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store/counterReducer";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-pregular">MatchMantra! {count}</Text>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>+</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
