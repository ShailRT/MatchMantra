import { Alert, ScrollView, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { router } from "expo-router";
import Input from "../../components/Input";
import { colors } from "../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { login } from "../../utils/backendCalls";
import { UserContext } from "../_layout";

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
  const { setUser } = useContext(UserContext);

  const onChange = (key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  const handleSignIn = async () => {
    if (!values?.email || !values?.password) {
      Alert.alert("All fields are required");
      return;
    }

    try {
      const token = await login(values);
      if (token) {
        setUser({ token });
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
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Input
          value={values.email}
          onChangeText={(v) => onChange("email", v)}
          label="E-mail"
          placeholder="example@gmail.com"
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
