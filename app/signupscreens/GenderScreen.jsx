import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect , useContext } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SignUpContext } from "../_layout";

const GenderScreen = ({ navigation }) => {
  const  { signUpForm, setSignUpForm } = useContext(SignUpContext);
 
  const [gender, setGender] = useState("");

  useEffect(() => {
    if(signUpForm?.gender ){
      setGender(signUpForm?.gender); 
    }
  }, []);

 
  const handleNext = () => {
    if (gender.trim() !== "" ) {
      setSignUpForm({...signUpForm, gender: gender})
      // Navigate to the next screen
      navigation.navigate("HomeT");
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
              name="cake-variant-outline"
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
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            
            marginTop: 15,
          }}
        >
          Which gender descibes you the best?
        </Text>

        <Text style={{ marginTop: 30, fontSize: 15, color: "gray" }}>
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
            <Text style={{ fontWeight: "500", fontSize: 15 }}>Men</Text>
            <Pressable onPress={() => setGender("Men")}>
              <FontAwesome
                name="circle"
                size={26}
                color={gender == "Men" ? "#581845" : "#F0F0F0"}
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
            <Text style={{ fontWeight: "500", fontSize: 15 }}>Women</Text>
            <Pressable onPress={() => setGender("Women")}>
              <FontAwesome
                name="circle"
                size={26}
                color={gender == "Women" ? "#581845" : "#F0F0F0"}
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
            <Text style={{ fontWeight: "500", fontSize: 15 }}>Others</Text>
            <Pressable onPress={() => setGender("Others")}>
              <FontAwesome
                name="circle"
                size={26}
                color={gender == "Others" ? "#581845" : "#F0F0F0"}
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
          {/* <AntDesign name="checksquare" size={26} color="#581845" /> */}
          {/* <Text style={{ fontSize: 15 }}>Visible on profile</Text> */}
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

export default GenderScreen;

const styles = StyleSheet.create({});
