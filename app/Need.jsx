import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const Need = () => {
  const onSignUp = () => {
    router.replace("/StackNavigator");
  };
  const onSignIn = () => {
    router.replace("/sign-in");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Need SignIn / SignUp</Text>

        <TouchableOpacity style={styles.button} onPress={onSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]} onPress={onSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Need;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 130,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  content: {
    alignItems: "center",
  },
  text: {
    marginBottom: 30,
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    backgroundColor: "#fff", // White background for the buttons
    borderWidth: 2, // Border thickness
    borderColor: "#a3282b", // Border color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "#a3282b", // Text color for the buttons
    fontSize: 22,
    fontWeight: "bold",
  },
});
