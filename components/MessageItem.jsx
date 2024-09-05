import { View, Text, Image } from "react-native";
import React from "react";

const MessageItem = () => {
  return (
    <View className="justify-center items-center flex-row flex-1 border-b py-2 border-black-100/30 px-2">
      <View className="w-[70px] h-[70px] rounded-lg boreder border-secondary justify-center items-center p-0.5">
        <Image
          source={{
            uri: "https://m.media-amazon.com/images/I/61KpZVl3bfL._AC_UF1000,1000_QL80_.jpg",
          }}
          className="w-full h-full rounded-full"
          resizeMode="cover"
        />
      </View>
      <View className="justify-center flex-1 ml-3 gap-y-1">
        <Text
          className="text-black-100 font-pmedium text-base"
          numberOfLines={1}
        >
          Ralph
        </Text>
        <Text className="text-xs text-black-100 font-psemibold">
          Start the chat with Ralph
        </Text>
      </View>
    </View>
  );
};

export default MessageItem;
