import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { addTokenToAxios } from "../utils/request";

SplashScreen.preventAutoHideAsync();
export const UserContext = React.createContext();
export const SignUpContext = React.createContext();

const RootLayout = () => {
  const [user, setUser] = useState();
  const [signUpForm, setSignUpForm] = useState();
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("auth_token");
      const auth_user = await AsyncStorage.getItem("auth_user");
      setUser({ token: token, user: JSON.parse(auth_user) });
      //for loader
      // setTimeout(() => {
      //     setLoading(false);
      // }, 1000);
    })();
  }, []);

  // adding token to axios
  useEffect(() => {
    if (user?.token) {
      // addTokenToAxios(user?.token);
    }
  }, [user]);

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  console.log(user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SignUpContext.Provider value={{ signUpForm, setSignUpForm }}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="StackNavigator"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="chat" options={{ headerShown: false }} />
        </Stack>
      </SignUpContext.Provider>
    </UserContext.Provider>
  );
};

export default RootLayout;
