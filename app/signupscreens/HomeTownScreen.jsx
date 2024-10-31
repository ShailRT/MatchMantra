import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SignUpContext } from "../_layout";
import ErrorText from "../../components/ErrorText";

const HomeTownScreen = ({ navigation }) => {
  const { signUpForm, setSignUpForm } = useContext(SignUpContext);
  const [hometown, setHometown] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (signUpForm?.location) {
      setHometown(signUpForm?.location);
    }
  }, []);

  const handleNext = () => {
    if (hometown.trim() !== "") {
      setSignUpForm({ ...signUpForm, location: hometown });
      setError("");
      navigation.navigate("Photo");
    } else {
      setError("This field is required!");
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
            <MaterialCommunityIcons name="home-outline" size={30} />
            {/* <AntDesign name="hearto" size={22} color="black" /> */}
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
          Where's your home Town?
        </Text>

        <TextInput
          value={hometown ? hometown : null}
          onChangeText={(text) => setHometown(text)}
          autoFocus={true}
          style={{
            width: 340,
            marginVertical: 10,
            fontSize: hometown ? 20 : 20,
            marginTop: 45,
            borderBottomColor: "black",
            borderBottomWidth: 1,
            paddingBottom: 10,
          }}
          className="font-plight text-lg"
          placeholder="HomeTown"
          placeholderTextColor={"#BEBEBE"}
        />
        {error && <ErrorText message={error} />}

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

export default HomeTownScreen;
