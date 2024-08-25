import { colors } from "../constants/colors";
import React from "react";
import { View } from "react-native";

const Spacer = ({ size, horizontal, backgroundColor = "transparent" }) => {
  return (
    <View
      style={[
        {
          backgroundColor:
            backgroundColor === "transparent"
              ? "transparent"
              : colors[backgroundColor],
        },
        {
          height: horizontal ? undefined : size,
          width: !horizontal ? undefined : size,
        },
      ]}
    ></View>
  );
};

export default Spacer;
