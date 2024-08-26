import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { HingeLogo } from "../constants/icons";
const ImageCard = ({ image }) => {
  return (
    <View className="flex-col items-center px-4 mb-6">
      <View className="flex-row items-start">
        <View className="flex-row flex-1">
          <View className="flex-1 border rounded-xl mb-[-10px] border-gray-100 border-b-0 pb-5 px-6 pt-4">
            <Text
              className="font-psemibold text-sm align-middle"
              numberOfLines={1}
            >
              Take me back to
            </Text>
          </View>
        </View>
      </View>
      <View className="w-full h-96 border border-gray-100">
        <Image
          source={{
            uri: image,
          }}
          className="w-full h-full "
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default ImageCard;
