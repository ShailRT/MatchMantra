import { Text, View } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./_layout";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const { user } = useContext(UserContext);

  if (user?.token) {
    return <Redirect href="feed" />;
  } else {
    return <Redirect href="sign-in" />;
  }
}
