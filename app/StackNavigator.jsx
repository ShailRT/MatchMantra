import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BasicInfo from "./signupscreens/BasicInfo";
import NameScreen from "./signupscreens/NameScreen";
import EmailScreen from "./signupscreens/EmailScreen";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BasicInfo" component={BasicInfo} />
      <Stack.Screen name="Name" component={NameScreen} />
      <Stack.Screen name="Email" component={EmailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
