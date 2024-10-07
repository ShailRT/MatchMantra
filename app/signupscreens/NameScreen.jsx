import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// import {
//   getRegistrationProgress,
//   saveRegistrationProgress,
// } from "../registrationUtils";

const NameScreen = ({ navigation }) => {
  // const [firstName, setFirstName] = useState("");
  // useEffect(() => {
  //   getRegistrationProgress("Name").then((progressData) => {
  //     if (progressData) {
  //       setFirstName(progressData.firstName || "");
  //     }
  //   });
  // }, []);

  // const handleNext = () => {
  //   if (firstName.trim() !== "") {
  //     // Save the current progress data including the name
  //     saveRegistrationProgress("Name", { firstName });
  //   }
  //   // Navigate to the next screen
  //   navigation.navigate("Email");
  // };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderColor: "black",
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              size={26}
              color="black"
            />
          </View>
          <Image
            style={{ width: 100, height: 40 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/10613/10613685.png",
            }}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              fontFamily: "GeezaPro-Bold",
            }}
          >
            What's your name?
          </Text>
          <TextInput
            autoFocus={true}
            // value={firstName}
            // onChangeText={(text) => setFirstName(text)}
            style={{
              width: 340,
              marginVertical: 10,
              fontSize: 22,
              marginTop: 25,
              borderBottomColor: "black",
              borderBottomWidth: 1,
              paddingBottom: 10,
              fontFamily: "GeezaPro-Bold",
            }}
            placeholder="First name (required)"
            placeholderTextColor={"#BEBEBE"}
          />
          <TextInput
            style={{
              width: 340,
              marginVertical: 10,
              fontSize: 22,
              marginTop: 25,
              borderBottomColor: "black",
              borderBottomWidth: 1,
              paddingBottom: 10,
              fontFamily: "GeezaPro-Bold",
            }}
            placeholder="Last name"
            placeholderTextColor={"#BEBEBE"}
          />
          <Text style={{ fontSize: 15, color: "gray", fontWeight: "500" }}>
            Last match is optional.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Email")}
          activeOpacity={0.8}
          style={{ marginTop: 30, marginLeft: "auto" }}
        >
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            color="#581845"
            style={{ alignSelf: "center", marginTop: 20 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NameScreen;

const styles = StyleSheet.create({});
