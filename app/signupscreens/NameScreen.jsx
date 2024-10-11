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
import React, { useState, useEffect ,useContext} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SignUpContext } from "../_layout";


const NameScreen = ({ navigation }) => {
  const { signUpForm, setSignUpForm } = useContext(SignUpContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if(signUpForm?.firstName || signUpForm?.lastName){
      setFirstName(signUpForm?.firstName);
      setLastName(signUpForm?.lastName);
    }
  }, []);

  const handleNext = () => {
    if (firstName.trim() !== "" && lastName.trim() !== "") {
      setSignUpForm({...signUpForm, firstName: firstName , lastName: lastName})
      // Navigate to the next screen
      navigation.navigate("Email");
    }else{
      // apply check
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
              
            }}
          >
            What's your name?
          </Text>
          <TextInput
            autoFocus={true}
            value={firstName ? firstName: null}
            onChangeText={(text) => setFirstName(text)}
            style={{
              width: 340,
              marginVertical: 10,
              fontSize: 22,
              marginTop: 25,
              borderBottomColor: "black",
              borderBottomWidth: 1,
              paddingBottom: 10,
              
            }}
            placeholder="First name (required)"
            placeholderTextColor={"#BEBEBE"}
          />
          <TextInput
            value={lastName ? lastName: null}
            onChangeText={(text) => setLastName(text)}
            style={{
              width: 340,
              marginVertical: 10,
              fontSize: 22,
              marginTop: 25,
              borderBottomColor: "black",
              borderBottomWidth: 1,
              paddingBottom: 10,
              
            }}
            placeholder="Last name"
            placeholderTextColor={"#BEBEBE"}
          />
          <Text style={{ fontSize: 15, color: "gray", fontWeight: "500" }}>
            Last name is optional.
          </Text>
        </View>
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

export default NameScreen;

const styles = StyleSheet.create({});
