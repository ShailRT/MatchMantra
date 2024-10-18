import { Alert, ScrollView, Text, StyleSheet, View, Image } from "react-native";
import React, { useContext, useState } from "react";
import { router } from "expo-router";
import Input from "../../components/Input";
import { colors } from "../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { login } from "../../utils/backendCalls";
import { UserContext } from "../_layout";
import { addTokenToAxios } from "../../utils/request";

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 13,
  },
  agreeTextBold: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#a3282b",
    marginVertical: 20,
  },
  footerText: {
    color: colors.blue,
    marginBottom: 56,
    textAlign: "center",
  },
  footerLink: {
    fontWeight: "bold",
  },
});

const SignIn = () => {
  const [values, setValues] = useState({});
  const { user, setUser } = useContext(UserContext);

  const onChange = (key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  const handleSignIn = async () => {
    if (!values?.email || !values?.password) {
      Alert.alert("All fields are required");
      return;
    }

    values.email = values.email.toLowerCase();
    try {
      const response = await login(values);
      if (response.token) {
        setUser({ token: response.token, user: response.user });
        router.push("feed");
      }
    } catch (error) {
      console.log("error while login : ", error);
    }
  };

  const onSignUp = () => {
    router.push("/sign-up");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            height: 220,
            backgroundColor: "#a3282b",
            width: "120%",
            borderBottomLeftRadius: 160,
            borderBottomRightRadius: 160,
          }}
        >
          <View
            style={{
              alignItems: "center",
              paddingTop: 0,
            }}
          >
            <Image
              style={{ marginTop: -15, height: 250, resizeMode: "contain" }}
              source={require("../../assets/images/logosm.png")}
            />
          </View>
          {/* <Text
          style={{
            marginTop: 20,
            textAlign: "center",
            fontSize: 23,
            fontFamily: "GeezaPro-Bold",
            color: "white",
          }}
        >
          Shaadi Mantraa
        </Text> */}
        </View>
      </View>
      <ScrollView style={styles.container}>
        <Input
          value={values.email}
          onChangeText={(v) => onChange("email", v)}
          label="E-mail"
          placeholder="example@gmail.com"
          labelStyle={{ color: "black" }}
        />
        <Input
          value={values.password}
          onChangeText={(v) => onChange("password", v)}
          isPassword
          label="Password"
          placeholder="*******"
        />
        <Button onPress={handleSignIn} style={styles.button} title="Sign In" />

        <Text style={styles.footerText}>
          Don't have an account?
          <Text onPress={onSignUp} style={styles.footerLink}>
            {" "}
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
