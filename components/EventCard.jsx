import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { HingeLogo } from "../constants/icons";
import { Link, router } from "expo-router";

const EventCard = ({ image, id }) => {
  return (
    <View className="flex-col items-center px-4 mb-6 shadow-sm shadow-black-50 ">
      <View className="w-full h-52 border border-gray-100 rounded-t-xl">
        <Image
          source={{
            uri: "https://static.tnn.in/thumb/113487793/113487793.jpg?height=746&width=420&resizemode=76&imgsize=70468",
          }}
          className="w-full h-full rounded-t-xl"
          resizeMode="cover"
        />
      </View>
      <View className="flex-row items-start">
        <View className="flex-row flex-1">
          <View className="flex-1 rounded-b-xl bg-[#f1f1f1] py-3 px-6 justify-center border-black-100/10 border">
            <Text
              className="font-psemibold text-lg align-middle"
              numberOfLines={1}
            >
              Garba Knight
            </Text>
            <Text
              className="font-psemibold text-sm align-middle text-black-100/50 bg-secondary"
              numberOfLines={1}
            >
              14 Aug 2024 onwards
            </Text>
            <View className="flex-row mt-2">
              <TouchableOpacity>
                <Link
                  href={{
                    pathname: "/(events)/[id]",
                    params: { id: 1 },
                  }}
                  className="mt-1 p-0"
                >
                  <View className="px-4 h-10 items-center justify-center mr-2 rounded-full border-gray-100 border text-black-100">
                    <Text className="font-pmedium ">Details</Text>
                  </View>
                </Link>
              </TouchableOpacity>

              <TouchableOpacity>
                <View className="px-4 h-10 items-center justify-center mr-2 rounded-full border-gray-100 border text-black-100">
                  <Text className="font-pmedium ">Buy Ticket</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EventCard;
