import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BasicInfo from "./signupscreens/BasicInfo";
import NameScreen from "./signupscreens/NameScreen";
import EmailScreen from "./signupscreens/EmailScreen";
import PasswordScreen from "./signupscreens/PasswordScreen";
import BirthScreen from "./signupscreens/BirthScreen";
import TypeScreen from "./signupscreens/TypeScreen";
import GenderScreen from "./signupscreens/GenderScreen";
import DatingScreen from "./signupscreens/DatingScreen";
import LookingFor from "./signupscreens/LookingFor";
import HomeTownScreen from "./signupscreens/HomeTownScreen";
import PhotoScreen from "./signupscreens/PhotoScreen";
import PromptsScreen from "./signupscreens/PromptsScreen";
import ShowPromptsScreen from "./signupscreens/ShowPromptsScreen";
import PreFinalScreen from "./signupscreens/PreFinalScreen";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BasicInfo" component={BasicInfo} />
      <Stack.Screen name="Name" component={NameScreen} />
      <Stack.Screen name="Email" component={EmailScreen} />
      <Stack.Screen name="Password" component={PasswordScreen} />
      <Stack.Screen name="Birth" component={BirthScreen} />
      <Stack.Screen name="Gender" component={GenderScreen} />
      <Stack.Screen name="Type" component={TypeScreen} />
      <Stack.Screen name="Dating" component={DatingScreen} />
      <Stack.Screen name="Look" component={LookingFor} />
      <Stack.Screen name="HomeTown" component={HomeTownScreen} />
      <Stack.Screen name="Photo" component={PhotoScreen} />
      <Stack.Screen name="Prompt" component={PromptsScreen} />
      <Stack.Screen name="ShowPrompts" component={ShowPromptsScreen} />
      <Stack.Screen name="PreFinal" component={PreFinalScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
