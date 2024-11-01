import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router, Stack, Tabs } from "expo-router";
import {
  HingeIcon,
  PersonIcon,
  HeartIcon,
  StarIcon,
  MessageIcon,
} from "../../constants/icons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center`">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#111",
          tabBarStyle: {
            backgroundColor: "#205B5A",
            borderTopWidth: 1,
            height: 60,
            // paddingBottom: 0,
          },
        }}
      >
        <Tabs.Screen
          name="feed"
          options={{
            title: "Feed",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name="rose-outline" size={27} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(events)"
          options={{
            title: "(events)",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name="ticket-outline" size={27} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="matches"
          options={{
            title: "Matches",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="heart-outline"
                size={30}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(messages)"
          options={{
            title: "Messages",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="message-outline"
                size={26}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(account)"
          options={{
            title: "Account",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome name="user-o" size={25} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
