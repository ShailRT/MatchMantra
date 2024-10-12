import { Text, View } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { useContext } from "react";
import { UserContext } from "./_layout";

export default function App() {
  const { user } = useContext(UserContext);

  if (user?.token) {
    return <Redirect href="feed" />;
  } else {
    return <Redirect href="sign-in" />;
  }
}
