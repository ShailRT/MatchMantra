import { View, Text, Image } from "react-native";
import React from "react";
import { CancelIcon } from "../constants/icons";

const RejectBtn = () => {
  return (
    <View className="bg-white fixed bottom-36 left-4 w-16 h-16 items-center justify-center rounded-full shadow-xl">
      <Image source={CancelIcon} resizeMode="contain" className="w-10 h-10" />
    </View>
  );
};

export default RejectBtn;
