import React from "react";
import { Stack } from "expo-router";

const tempLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

      </Stack>
    </>
  );
};

export default tempLayout;
