import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AccountLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="account" options={{ headerShown: false }} />
      <Stack.Screen name="accountSettings" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AccountLayout;
