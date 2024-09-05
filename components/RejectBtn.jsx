import { View, Text, Image } from "react-native";
import React from "react";
import { CancelIcon } from "../constants/icons";

const RejectBtn = () => {
  return (
    <View className="bg-white fixed bottom-32 left-4 w-16 h-16 items-center justify-center rounded-full shadow-sm shadow-black-100">
      <Image source={CancelIcon} resizeMode="contain" className="w-8 h-8" />
    </View>
  );
};

export default RejectBtn;
