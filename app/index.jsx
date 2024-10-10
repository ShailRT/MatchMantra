import { Text, View } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { useContext } from "react";
import { UserContext } from "./_layout";

export default function App() {
  const { user } = useContext(UserContext);

  if (user?.token) {
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
