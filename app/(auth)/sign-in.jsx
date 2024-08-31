import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import VideoBackground from "../../components/VideoBackgroud";
import { AppleIcon, FacebookfIcon, HingeLogo } from "../../constants/icons";
import { colors } from "../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../../components/Spacer";
import Type from "../../components/Type";
import Btn from "../../components/Btn";

const SignIn = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = () => {
    setIsSigningIn((prev) => !prev);
  };

  const handleCreateAccount = () => {
    router.push("/sign-up");
  };

  const handleSignInWithPhoneNumber = () => {
    router.push("/(auth)/phone-number");
  };

  return (
    <VideoBackground source={require("../../assets/videos/background.mp4")}>
      <SafeAreaView style={styles.content}>
        {/* <StatusBar style="light" /> */}
        <View style={styles.branding}>
          <Spacer size={130} />
          <Image
            source={HingeLogo}
            resizeMode="contain"
            className="w-[140px] h-[70px]"
          />
          <Spacer size={10} />
          <Type variant="titleBold" color="white" textAlign="center">
            Designed to be deleted.
          </Type>
        </View>
        <Spacer size={20} />
        {!isSigningIn && (
          <Btn onPress={handleCreateAccount} backgroundColor="primaryDark">
            <Type variant="bodyBold" color="white">
              Create account
            </Type>
          </Btn>
        )}
        {isSigningIn && (
          <View style={styles.signin}>
            <Btn
              backgroundColor="white"
              startIcon={
                <Image
                  source={AppleIcon}
                  className="w-[20px] h-[20px]"
                  resizeMode="contain"
                />
              }
            >
              <Type variant="bodyBold" color="black">
                Sign in with Apple
              </Type>
            </Btn>
            <Btn
              backgroundColor="facebookBlue"
              startIcon={
                <Image
                  source={FacebookfIcon}
                  className="w-[20px] h-[20px]"
                  resizeMode="contain"
                />
              }
            >
              <Type variant="bodyBold" color="white">
                Sign in with Facebook
              </Type>
            </Btn>
            <Btn
              backgroundColor="primaryDark"
              onPress={handleSignInWithPhoneNumber}
            >
              <Type variant="bodyBold" color="white">
                Sign in with Phone Number
              </Type>
            </Btn>
          </View>
        )}
        <Spacer size={10} />
        <Btn backgroundColor="transparent" onPress={handleSignIn}>
          <Type variant="bodyBold" color="white">
            {isSigningIn ? "Back" : "Sign in"}
          </Type>
        </Btn>
      </SafeAreaView>
    </VideoBackground>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 40,
  },
  branding: {
    flex: 1,
    alignItems: "center",
  },
  signin: {
    gap: 10,
  },
});
