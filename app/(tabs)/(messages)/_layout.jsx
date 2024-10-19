import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const MessageLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="messages" options={{ headerShown: false }} />
      {/* <Stack.Screen name="[query]" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default MessageLayout;
