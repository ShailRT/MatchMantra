import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { SignUpContext } from "../_layout";
import ErrorText from "../../components/ErrorText";

const EmailScreen = ({ navigation }) => {
  const { signUpForm, setSignUpForm } = useContext(SignUpContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (signUpForm?.email) {
      setEmail(signUpForm?.email);
    }
  }, []);

  const handleNext = () => {
    if (validateEmail() && validatePassword()) {
      setSignUpForm({
        ...signUpForm,
        email: email.toLowerCase(),
        password: password,
        confirmPassword: confirmPassword,
      });
      // Navigate to the next screen
      setError("");
      setPasswordError("");
      navigation.navigate("Birth");
    }
  };

  const validateEmail = () => {
    if (email.trim() == "") {
      setError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email address is invalid");
      return false;
    }
    setError("");
    return true;
  };

  const validatePassword = () => {
    if (password.trim() == "" || password.length < 8) {
      setPasswordError("Password should be of atleast 8 characters");
      return false;
    }
    if (password != confirmPassword) {
      setPasswordError("Pasword does not match");
      return false;
    }
    return true;
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
            <Fontisto name="email" size={26} color="black" />
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
          Please provide a valid Email and Password
        </Text>

        {/* <Text
          style={{ marginTop: 30, color: "gray" }}
          className="font-plight text-sm"
        >
          Email verification helps us keep your account secure.{" "}
          <Text style={{ color: "#581845", fontWeight: "500" }}>
            Learn more
          </Text>
        </Text> */}
        <TextInput
          autoFocus={true}
          value={email ? email : null}
          onChangeText={(text) => setEmail(text)}
          style={{
            width: 340,
            marginVertical: 10,
            fontSize: email ? 20 : 20,
            marginTop: 25,
            borderBottomColor: "black",
            borderBottomWidth: 1,
            paddingBottom: 10,
          }}
          className="font-plight text-lg"
          placeholder="Enter your email"
          placeholderTextColor={"#BEBEBE"}
        />
        {error && <ErrorText message={error} />}
        {/* <Text
          style={{ color: "gray", marginTop: 7 }}
          className="font-plight text-sm"
        >
          Note: You will be asked to verify your email
        </Text> */}

        <TextInput
          secureTextEntry={true}
          autoFocus={true}
          onChangeText={(text) => setPassword(text)}
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
          placeholder="Enter your password"
          placeholderTextColor={"#BEBEBE"}
        />

        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
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
          placeholder="Confirm password"
          placeholderTextColor={"#BEBEBE"}
        />

        {passwordError && <ErrorText message={passwordError} />}
        {/* <Text
          style={{ color: "gray", marginTop: 7 }}
          className="font-plight text-sm"
        >
          Note: Your details will be safe with us.
        </Text> */}

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

export default EmailScreen;

const styles = StyleSheet.create({});
