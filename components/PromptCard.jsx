import { View, Text } from "react-native";
import React from "react";

const PromptCard = ({ prompt }) => {
  return (
    <View className="flex-col items-center px-4 mb-6 ">
      <View className="w-full h-52 border border-gray-100 rounded-xl bg-secondary shadow-sm shadow-black-50 justify-center px-6">
        <Text className="font-psemibold text-base mb-4" numberOfLines={1}>
          {prompt.title}
        </Text>
        <Text className="text-3xl font-pmedium">{prompt.message}</Text>
      </View>
    </View>
  );
};

export default PromptCard;
