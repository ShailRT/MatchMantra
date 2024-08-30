import { View, Text, Image } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import {
  HingeIcon,
  PersonIcon,
  HeartIcon,
  StarIcon,
  MessageIcon,
} from "../../constants/icons";

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
          name="star"
          options={{
            title: "Star",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={StarIcon}
                color={color}
                name="Star"
                focused={focused}
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
              <TabIcon
                icon={HeartIcon}
                color={color}
                name="Matches"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="message"
          options={{
            title: "Message",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={MessageIcon} color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={PersonIcon}
                color={color}
                name="Account"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
