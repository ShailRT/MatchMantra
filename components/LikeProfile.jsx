import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
const LikeProfile = ({ image }) => {
  return (
    <View className="flex-col items-center px-4 mb-6">
      <View className="flex-row items-start">
        <View className="flex-row flex-1">
          <View className="flex-1 rounded-t-xl bg-secondary py-3 px-4 justify-center border-black-100/10 border border-b-0">
            <Text
              className="font-psemibold text-xl align-middle"
              numberOfLines={1}
            >
              Laila
            </Text>
          </View>
        </View>
      </View>
      <View className="w-full h-96 border border-t-0 px-2 pb-3 border-gray-100 rounded-b-xl">
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

export default LikeProfile;
