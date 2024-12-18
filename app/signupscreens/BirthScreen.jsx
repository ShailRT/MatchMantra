import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState, useEffect, useContext } from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SignUpContext } from "../_layout";
import { generateRegisterPayload } from "../../utils/payloadUtils";
import { signup } from "../../utils/backendCalls";
import ErrorText from "../../components/ErrorText";

const BirthScreen = ({ navigation }) => {
  const { signUpForm, setSignUpForm } = useContext(SignUpContext);

  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    if (signUpForm?.dob) {
      const [yearValue, monthValue, dayValue] = signUpForm?.dob.split("-");
      setDay(dayValue);
      setMonth(monthValue);
      setYear(yearValue);
    }
  }, []);

  // todo apply validation for correct date entered ..
  const handleDayChange = (text) => {
    setDay(text);
    if (text.length == 2) {
      monthRef.current.focus();
    }
  };

  const handleMonthChange = (text) => {
    setMonth(text);
    if (text.length == 2) {
      yearRef.current.focus();
    }
  };

  const handleYearChange = (text) => {
    setYear(text);
  };

  const handleNext = async () => {
    // Check if all the date values are provided
    if (day.trim() !== "" && month.trim() !== "" && year.trim() !== "") {
      // Construct the date string in the desired format
      const dateOfBirth = `${year}-${month}-${day}`;

      if (validateDate(dateOfBirth)) {
        setSignUpForm({ ...signUpForm, dob: dateOfBirth });
        const data = generateRegisterPayload({
          ...signUpForm,
          dob: dateOfBirth,
        });
        try {
          const token = await signup(data);
          if (token) {
            navigation.navigate("Gender"); // Or navigate to the appropriate screen
          } else {
            setError("Something went wrong, please wait for sometime");
          }
        } catch (error) {
          console.log("error while registering :", error);
        }
        setError("");
      }
    }
  };

  const validateDate = (dateOfBirth) => {
    const date = new Date(dateOfBirth);
    if (
      !(
        date.getFullYear() == year &&
        date.getMonth() == month - 1 &&
        date.getDate() == day
      )
    ) {
      setError("Invalid Date");
      return false;
    }

    const today = new Date();
    if (today.getFullYear() - date.getFullYear() < 25) {
      setError("Minimum age should be 25! ");
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
            marginTop: 15,
          }}
          className="font-psemibold text-2xl"
        >
          What's your date of birth?
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginTop: 30,
            justifyContent: "center",
          }}
        >
          {/* Day Input Field */}
          <TextInput
            autoFocus={true}
            style={{
              borderBottomWidth: 1,
              borderColor: "black",
              padding: 10,
              width: 45,
              fontSize: day ? 20 : 20,
            }}
            placeholder="DD"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={handleDayChange}
            value={day}
          />

          {/* Month Input Field */}
          <TextInput
            ref={monthRef}
            style={{
              borderBottomWidth: 1,
              borderColor: "black",
              padding: 10,
              width: 55,
              fontSize: month ? 20 : 20,
            }}
            placeholder="MM"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={handleMonthChange}
            value={month}
          />

          {/* Year Input Field */}
          <TextInput
            ref={yearRef}
            style={{
              borderBottomWidth: 1,
              borderColor: "black",
              padding: 10,
              width: 65,
              fontSize: 20,
            }}
            placeholder="YYYY"
            keyboardType="numeric"
            maxLength={4}
            onChangeText={handleYearChange}
            value={year}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginTop: 30,
            justifyContent: "center",
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

export default BirthScreen;
