import { Text, View } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./_layout";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const { user } = useContext(UserContext);

  // if (user?.token) {
  //   return <Redirect href="feed" />;
  // } else {
  //   return <Redirect href="sign-in" />;
  // }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-pregular">MatchMantra!</Text>
      <Link href="/sign-in">
        <Text>Sign In</Text>
      </Link>

      <Link href="/feed">
        <Text>Home</Text>
      </Link>

      <Link href="StackNavigator">
        <Text>Sign Up</Text>
      </Link>
      <Link href="/(auth)/serviceOptions">
        <Text>AccountSetting</Text>
      </Link>
    </View>
  );
}
