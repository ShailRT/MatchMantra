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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center`">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-7 h-7"
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
          tabBarInactiveTintColor: "#757575",
          tabBarStyle: {
            backgroundColor: "#1a1a1a",
            borderTopWidth: 1,
            borderTopColor: "#1a1a1a",
            height: 84,
            paddingBottom: 20,
          },
        }}
      >
        <Tabs.Screen
          name="feed"
          options={{
            title: "Feed",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={HingeIcon}
                color={color}
                name="Hinge"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(events)"
          options={{
            title: "(events)",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="calendar-search"
                size={28}
                color={color}
              />
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
          name="account"
          options={{
            title: "Account",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name="account" size={33} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
