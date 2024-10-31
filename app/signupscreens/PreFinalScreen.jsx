import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import LottieView from "lottie-react-native";
import { SignUpContext, UserContext } from "../_layout";
import { createDataForProfile } from "../../utils/payloadUtils";
import { updateProfile } from "../../utils/backendCalls";
import { router } from "expo-router";

const PreFinalScreen = () => {
  const { signUpForm, setSignUpForm } = useContext(SignUpContext);
  const { setUser } = useContext(UserContext);

  const handleSubmit = async () => {
    const data = createDataForProfile(signUpForm);
    try {
      const response = await updateProfile(data);
      setSignUpForm("");
      setUser({ user: response[0].user, token: response[1] });
      router.push("feed");
    } catch (error) {
      console.log("error in handleSubmit", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginTop: 30 }}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",

            marginLeft: 20,
          }}
        >
          All set to register
        </Text>
        <Text
          style={{
            fontSize: 33,
            fontWeight: "bold",

            marginLeft: 20,
            marginRight: 10,
            marginTop: 10,
          }}
        >
          Setting up your profile for you
        </Text>
      </View>

      <View>
        <LottieView
          source={require("../../assets/love.json")}
          style={{
            height: 260,
            width: 300,
            alignSelf: "center",
            marginTop: 40,
            justifyContent: "center",
          }}
          autoPlay
          loop={true}
          speed={0.7}
        />
      </View>

      <Pressable
        onPress={handleSubmit}
        style={{ backgroundColor: "#205B5A", padding: 15, marginTop: "auto" }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "600",
            fontSize: 15,
          }}
        >
          Finish registering
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PreFinalScreen;

const styles = StyleSheet.create({});
