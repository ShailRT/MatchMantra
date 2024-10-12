import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { HingeLogo } from "../constants/icons";
const ImageCard = ({ image }) => {
  return (
    <View className="flex-col items-center px-4 mb-6 shadow-sm shadow-black-50 ">
      <View className="w-full h-96 border border-gray-100 rounded-xl">
        <Image
          source={{
            uri: image,
          }}
          className="w-full h-full rounded-xl"
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default ImageCard;
