import { Text, View } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const getToken = async () => {
      const res = await AsyncStorage.getItem("auth_token");
      setToken(res);
    };
    getToken();
  }, []);
  if (token === null) {
    console.log("in sign-in", token);
    return <Redirect href="sign-in" />;
  } else {
    return <Redirect href="feed" />;
  }
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-pregular">MatchMantra!</Text>
      <Link href="/sign-in">
        <Text>Sign In</Text>
      </Link>

      <Link href="/feed">
        <Text>Home</Text>
      </Link>
    </View>
  );
}
