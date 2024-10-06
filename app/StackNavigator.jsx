import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import Entypo from "react-native-vector-icons/Entypo";
// import Feather from "react-native-vector-icons/Feather";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import LikesScreen from "../screens/LikesScreen";
// import ChatScreen from "../screens/ChatScreen";
// import ProfileScreen from "../screens/ProfileScreen";
// import EmailScreen from "../screens/EmailScreen";
// import BirthScreen from "../screens/BirthScreen";
// import LocationScreen from "../screens/LocationScreen";
// import GenderScreen from "../screens/GenderScreen";
// import TypeScreen from "../screens/TypeScreen";
// import DatingType from "../screens/DatingType";
// import AnimationScreen from "../screens/AnimationScreen";
// import LookingFor from "../screens/LookingFor";
// import HomeTownScreen from "../screens/HomeTownScreen";
// import PhotoScreen from "../screens/PhotoScreen";
// import PromptsScreen from "../screens/PromptsScreen";
// import ShowPromptsScreen from "../screens/ShowPromptsScreen";
// import LoginScreen from "../screens/LoginScreen";
// import ChatRoom from "../screens/ChatRoom";
// import SignupScreen from "../screens/SignupScreen";
// import { useContext } from "react";
// import { AuthContext } from "../AuthContext";
// import PreFinalScreen from "../screens/PreFinalScreen";
// import TestScreen from "../screens/TestScreen";
// import ProfileDetailsScreen from "../screens/ProfileDetailsScreen";
// import Password from "../screens/Password";
// import SendLikeScreen from "../screens/SendLikeScreen";
// import HandleLikeScreen from "../screens/HandleLikeScreen";
import BasicInfo from "./signupscreens/BasicInfo";
import NameScreen from "./signupscreens/NameScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  const AuthStack = () => (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Basic"
        component={BasicInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NameScreen"
        component={NameScreen}
        options={{ headerShown: false }}
      />
      {/* 
      <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Password"
        component={Password}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Birth"
        component={BirthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Gender"
        component={GenderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Type"
        component={TypeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dating"
        component={DatingType}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LookingFor"
        component={LookingFor}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Hometown"
        component={HomeTownScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Photos"
        component={PhotoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Prompts"
        component={PromptsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShowPrompts"
        component={ShowPromptsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PreFinal"
        component={PreFinalScreen}
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{headerShown: false}}
      /> */}
      {/* Other authentication screens */}
    </Stack.Navigator>
  );

  return (
    <>
      <AuthStack />
    </>
  );
};

export default StackNavigator;
