import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const MessageItem = () => {
  return (
    <TouchableOpacity onPress={() => router.push("./Rahul")}>
      <View className="justify-center items-center flex-row flex-1 border-b py-2 border-bblack px-2">
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
          <Text className="text-xs text-black/50 font-psemibold">
            Start the chat with Ralph
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  // return (
  //   <Pressable
  //     style={{
  //       flexDirection: "row",
  //       alignItems: "center",
  //       gap: 12,
  //       marginVertical: 12,
  //     }}
  //   >
  //     <View>
  //       <Image
  //         style={{ width: 70, height: 70, borderRadius: 35 }}
  //         source={{
  //           uri: "https://m.media-amazon.com/images/I/61KpZVl3bfL._AC_UF1000,1000_QL80_.jpg",
  //         }}
  //       />
  //     </View>

  //     <View>
  //       <Text
  //         style={{
  //           fontWeight: "500",
  //           fontSize: 16,
  //           fontFamily: "GeezaPro-Bold",
  //         }}
  //       >
  //         Shailesh
  //       </Text>
  //       <Text
  //         style={{
  //           fontSize: 16,
  //           fontWeight: "500",
  //           marginTop: 6,
  //         }}
  //       >
  //         {`Start Chat with Shailesh`}
  //       </Text>
  //     </View>
  //   </Pressable>
  // );
};

export default MessageItem;
