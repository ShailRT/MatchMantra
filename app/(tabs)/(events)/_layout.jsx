import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const EventLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="events" options={{ headerShown: false }} />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default EventLayout;
