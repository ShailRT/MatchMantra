import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { SignUpContext } from "../_layout";
import ErrorText from "../../components/ErrorText";

const GenderScreen = ({ navigation }) => {
  const { signUpForm, setSignUpForm } = useContext(SignUpContext);

  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (signUpForm?.gender) {
      setGender(signUpForm?.gender);
    }
  }, []);

  const handleNext = () => {
    if (gender.trim() !== "") {
      setSignUpForm({ ...signUpForm, gender: gender });
      setError("");
      navigation.navigate("HomeTown");
    } else {
      setError("Select a Gender!");
    }
  };

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
              name="gender-transgender"
              size={24}
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
        <Text
          style={{
            marginTop: 15,
          }}
          className="font-psemibold text-2xl"
        >
          Which gender descibes you the best?
        </Text>

        <Text
          style={{ marginTop: 30, color: "gray" }}
          className="font-plight text-sm"
        >
          Match Mantra users are matched based on these three gender groups. You
          can add more about gender after
        </Text>

        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontWeight: "500" }}
              className="font-psemicold text-base"
            >
              Male
            </Text>
            <Pressable onPress={() => setGender("Male")}>
              <FontAwesome
                name="circle"
                size={26}
                color={gender == "Male" ? "#205B5A" : "#F0F0F0"}
              />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 12,
            }}
          >
            <Text
              style={{ fontWeight: "500" }}
              className="font-psemicold text-base"
            >
              Female
            </Text>
            <Pressable onPress={() => setGender("Female")}>
              <FontAwesome
                name="circle"
                size={26}
                color={gender == "Female" ? "#205B5A" : "#F0F0F0"}
              />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontWeight: "500" }}
              className="font-psemicold text-base"
            >
              Others
            </Text>
            <Pressable onPress={() => setGender("Others")}>
              <FontAwesome
                name="circle"
                size={26}
                color={gender == "Others" ? "#205B5A" : "#F0F0F0"}
              />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          {error && <ErrorText message={error} />}
        </View>
        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{ marginTop: 30, marginLeft: "auto" }}
        >
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            color="#205B5A"
            style={{ alignSelf: "center", marginTop: 20 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GenderScreen;

const styles = StyleSheet.create({});
