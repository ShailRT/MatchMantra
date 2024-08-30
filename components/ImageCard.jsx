import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { HingeLogo } from "../constants/icons";
const ImageCard = ({ image }) => {
  return (
    <View className="flex-col items-center px-4 mb-6 shadow-sm shadow-black-50 ">
      <View className="flex-row items-start">
        <View className="flex-row flex-1">
          <View className="flex-1 rounded-t-xl bg-[#f1f1f1] py-3 px-6 justify-center border-black-100/10 border">
            <Text
              className="font-psemibold text-sm align-middle"
              numberOfLines={1}
            >
              Take me back to
            </Text>
          </View>
        </View>
      </View>
      <View className="w-full h-96 border border-gray-100 rounded-b-xl">
        <Image
          source={{
            uri: image,
          }}
          className="w-full h-full rounded-b-xl"
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default ImageCard;
