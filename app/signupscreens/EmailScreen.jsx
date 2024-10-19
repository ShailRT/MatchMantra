import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect,useContext } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { SignUpContext } from "../_layout";
import ErrorText from "../../components/ErrorText";

const EmailScreen = ({ navigation }) => {
  const {signUpForm,setSignUpForm} = useContext(SignUpContext)
  const [email, setEmail] = useState("");
  const [error,setError]= useState("");
  
  useEffect(() => {
    if(signUpForm?.email ){
      setEmail(signUpForm?.email);
       
    }
  }, []);

  const handleNext = () => {
    if(validateEmail()){
      setSignUpForm({...signUpForm, email: email.toLowerCase()})
      // Navigate to the next screen
      navigation.navigate("Password");
    }
  };

  const validateEmail = ()=>{
    if (email.trim() == "") {
      setError( 'Email is required');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError( 'Email address is invalid');
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
          Please provide a valid email
        </Text>

        <Text style={{ marginTop: 30, fontSize: 15, color: "gray" }}>
          Email verification helps us keep your account secure.{" "}
          <Text style={{ color: "#581845", fontWeight: "500" }}>
            Learn more
          </Text>
        </Text>
        <TextInput
          autoFocus={true}
          value={email ? email: null}
          onChangeText={(text) => setEmail(text)}
          style={{
            width: 340,
            marginVertical: 10,
            fontSize: email ? 22 : 22,
            marginTop: 25,
            borderBottomColor: "black",
            borderBottomWidth: 1,
            paddingBottom: 10,
            
          }}
          placeholder="Enter your email"
          placeholderTextColor={"#BEBEBE"}
        />
        {error && <ErrorText message={error}/>}
        <Text style={{ color: "gray", fontSize: 15, marginTop: 7 }}>
          Note: You will be asked to verify your email
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

export default EmailScreen;

const styles = StyleSheet.create({});
