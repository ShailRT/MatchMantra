import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ChatLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="chat" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ChatLayout;
