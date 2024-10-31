import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SignUpContext } from "../_layout";
import ErrorText from "../../components/ErrorText";

const NameScreen = ({ navigation }) => {
  const { signUpForm, setSignUpForm } = useContext(SignUpContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(["", ""]);

  useEffect(() => {
    if (signUpForm?.firstName || signUpForm?.lastName) {
      setFirstName(signUpForm?.firstName);
      setLastName(signUpForm?.lastName);
    }
  }, []);

  const handleNext = () => {
    if (firstName.trim() !== "" && lastName.trim() !== "") {
      setSignUpForm({
        ...signUpForm,
        firstName: firstName,
        lastName: lastName,
      });
      setError(["", ""]);
      // Navigate to the next screen
      navigation.navigate("Email");
    } else {
      handleError();
    }
  };

  const handleError = () => {
    const newError = [...error];
    if (firstName.trim() == "") {
      newError[0] = "First Name is required";
    } else {
      newError[0] = "";
    }
    if (lastName.trim() == "") {
      newError[1] = "Last Name is required";
    } else {
      newError[1] = "";
    }
    setError(newError);
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

        <View style={{ marginTop: 15 }}>
          <Text className="font-psemibold text-2xl">What's your name?</Text>
          <TextInput
            autoFocus={true}
            value={firstName ? firstName : null}
            onChangeText={(text) => setFirstName(text)}
            style={{
              width: 340,
              marginVertical: 10,
              fontSize: 20,
              marginTop: 25,
              borderBottomColor: "black",
              borderBottomWidth: 1,
              paddingBottom: 10,
            }}
            className="font-plight text-lg"
            placeholder="First name"
            placeholderTextColor={"#BEBEBE"}
          />
          {error[0] && <ErrorText message={error[0]} />}
          <TextInput
            value={lastName ? lastName : null}
            onChangeText={(text) => setLastName(text)}
            style={{
              width: 340,
              marginVertical: 10,
              fontSize: 20,
              marginTop: 25,
              borderBottomColor: "black",
              borderBottomWidth: 1,
              paddingBottom: 10,
            }}
            className="font-plight text-lg"
            placeholder="Last name"
            placeholderTextColor={"#BEBEBE"}
          />
          {error[1] && <ErrorText message={error[1]} />}
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

export default NameScreen;
