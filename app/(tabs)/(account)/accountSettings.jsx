import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Switch,
  TouchableOpacity,
  Image,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronRightIcon } from "../../../constants/icons";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
const data = [
  { label: "Men", value: "1" },
  { label: "Women", value: "2" },
  { label: "Binary", value: "3" },
];
const Religion = [
  { label: "Hindu", value: "4" },
  { label: "Muslim", value: "5" },
  { label: "Sikh", value: "6" },
  { label: "Christian", value: "7" },
  { label: "Parsi", value: "8" },
  { label: "Jain", value: "9" },
  { label: "Budhist", value: "10" },
];
const accountSettings = () => {
  const [isToggleAge, setIsToggleAge] = useState(false);
  const [isToggleDistance, setIsToggleDistance] = useState(false);
  const [isToggleVerified, setIsToggleVerified] = useState(true);
  const [slidervalue, setSlidervalue] = useState(22);
  const [income, setIncome] = useState(20000);
  const [value, setValue] = useState(null);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <TouchableOpacity onPress={() => router.back()}>
        <View className="flex-row items-center">
          <MaterialIcons name="arrow-back-ios-new" size={22} color="black" />
          <Text className="font-pregular text-base ml-1">Preference</Text>
        </View>
      </TouchableOpacity>
      <View style={{ alignItems: "center" }} className="mt-3">
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Narrow your search
        </Text>
      </View>
      {/* Who would you like to date */}
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontSize: 15, margin: 10 }}>
          Who would you like to date?
        </Text>

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Women"
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
          renderItem={renderItem}
        />
      </View>

      {/* How old are they */}
      <View style={{ marginBottom: 15 }}>
        <Text className="fontFamily-pbold" style={{ fontSize: 15, margin: 10 }}>
          How old are they?
        </Text>
        <View style={styles.box}>
          <View>
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 18 }}>Between 18 and {slidervalue}</Text>
            </View>

            <Slider
              style={{ width: 280, height: 40 }}
              minimumValue={22}
              maximumValue={50}
              onValueChange={(value) => setSlidervalue(value)}
              step={1}
              value={slidervalue}
              minimumTrackTintColor="black" // Track before thumb (left side)
              maximumTrackTintColor="black" // Track after thumb (right side)
              thumbTintColor="black" // Thumb color
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>See people 2 years either side if I run out</Text>
            <Switch value={isToggleAge} onValueChange={setIsToggleAge} />
          </View>
        </View>
      </View>

      {/* Select Your religion*/}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 15, margin: 10 }}>Select your Religion</Text>

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={Religion}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Hindu"
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
          renderItem={renderItem}
        />
      </View>
      {/* Income  */}
      <View style={{ marginBottom: 15 }}>
        <Text className="fontFamily-pbold" style={{ fontSize: 15, margin: 10 }}>
          Income per month
        </Text>
        <View style={styles.box}>
          <View>
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 18 }}>Between 10000 and {income}</Text>
            </View>

            <Slider
              style={{ width: 280, height: 40 }}
              minimumValue={20000}
              maximumValue={100000}
              onValueChange={(value) => setIncome(value)}
              step={1000}
              value={income}
              minimumTrackTintColor="black" // Track before thumb (left side)
              maximumTrackTintColor="black" // Track after thumb (right side)
              thumbTintColor="black" // Thumb color
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>See people 2 years either side if I run out</Text>
            <Switch
              value={isToggleVerified}
              onValueChange={setIsToggleVerified}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default accountSettings;
const styles = StyleSheet.create({
  dropdown: {
    marginTop: 2,
    height: 50,
    backgroundColor: "white",
    borderRadius: 22,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 4,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  box: {
    padding: 13,
    borderColor: "#ccc", // Set border color
    borderRadius: 15, // Set border radius
    backgroundColor: "#ffffff", // Set background color
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 4,
  },
});
