import { colors } from "../constants/colors";
import { typography } from "../constants/typography";
import React from "react";
import { Text, TextStyle } from "react-native";

const Type = ({
  variant = "body",
  color = "black",
  textAlign = "left",
  textDecorationLine = "none",
  style,
  children,
}) => {
  return (
    <Text
      style={[
        typography[variant],
        {
          color: colors[color],
          textAlign,
          textDecorationLine,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default Type;
