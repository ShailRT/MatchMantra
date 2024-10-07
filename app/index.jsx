import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store/counterReducer";
import { Link, router } from "expo-router";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-pregular">MatchMantra!</Text>
      <Link href="/sign-in">
        <Text>Sign In</Text>
      </Link>

      <Link href="/feed">
        <Text>Home</Text>
      </Link>

      <Link
        href="StackNavigator"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Text>Sign Up</Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
