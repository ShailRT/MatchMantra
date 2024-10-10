import { View, Text, Image } from "react-native";
import React from "react";
import { HeartIcon } from "../constants/icons";

const LikeBtn = () => {
  return (
    <View className="bg-white fixed bottom-32 right-4 w-16 h-16 items-center justify-center rounded-full shadow-sm shadow-black-100">
      <Image source={HeartIcon} resizeMode="contain" className="w-8 h-8" />
    </View>
  );
};

export default LikeBtn;
