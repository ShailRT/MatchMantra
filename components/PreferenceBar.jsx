import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SearchIcon, StarIcon } from "../constants/icons";

const PreferenceBar = ({ activePrefrence, setActivePrefrence, item }) => {
  const handleClick = (item) => {
    if (activePrefrence === item) {
      setActivePrefrence({});
    } else {
      setActivePrefrence(item);
    }
  };

  return item.icon ? (
    <View className="px-3 h-10 items-center justify-center mr-2 bg-secondary">
      <Image source={StarIcon} className="w-4 h-4 " resizeMode="contain" />
    </View>
  ) : (
    <TouchableOpacity onPress={() => handleClick(item)}>
      <View
        className={`px-4 h-10 items-center justify-center mr-2 rounded-full border-[#a3282b] border ${
          activePrefrence.id === item.id ? "bg-white" : "bg-[#a3282b]"
        }`}
      >
        <Text
          className={`font-pmedium ${
            activePrefrence.id === item.id
              ? "text-black-100 font-psemibold"
              : "text-white"
          }`}
        >
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PreferenceBar;
