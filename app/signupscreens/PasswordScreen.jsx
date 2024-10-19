import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState,useContext } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { SignUpContext } from "../_layout";
import ErrorText from "../../components/ErrorText";
 

const PasswordScreen = ({ navigation }) => {
  const { signUpForm, setSignUpForm } = useContext(SignUpContext);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [error, setError]= useState("");

  const handleNext = () => {
    if (validatePassword()) {
      setSignUpForm({...signUpForm, password:password, confirmPassword:confirmPassword})
      setError("");
      // Navigate to the next screen
      navigation.navigate("Birth");
    }
  };

  const validatePassword=()=>{
    if (password.trim() == "" || password.length < 8) {
      setError("Password should be of atleast 8 characters");
      return false;
    }
    if(password!= confirmPassword){
      setError("Pasword does not match");
      return false;
    }
    return true;
  }

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
            fontSize: 25,
            fontWeight: "bold",
            
            marginTop: 15,
          }}
        >
          Please choose your password
        </Text>

        <TextInput
          secureTextEntry={true}
          autoFocus={true}
          onChangeText={(text) => setPassword(text)}
          style={{
            width: 340,
            marginVertical: 10,
            fontSize: 22,
            marginTop: 25,
            borderBottomColor: "black",
            borderBottomWidth: 1,
            paddingBottom: 10,
            
          }}
          placeholder="Enter your password"
          placeholderTextColor={"#BEBEBE"}
        />

        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          style={{
            width: 340,
            marginVertical: 10,
            fontSize: 22,
            marginTop: 25,
            borderBottomColor: "black",
            borderBottomWidth: 1,
            paddingBottom: 10,
            
          }}
          placeholder="Confirm password"
          placeholderTextColor={"#BEBEBE"}
        />

          {error && <ErrorText message={error} /> }
        <Text style={{ color: "gray", fontSize: 15, marginTop: 7 }}>
          Note: Your details will be safe with us.
        </Text>
        <TouchableOpacity
          onPress={handleNext}
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

export default PasswordScreen;

const styles = StyleSheet.create({});
