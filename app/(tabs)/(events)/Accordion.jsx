import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Accordion = ({ title, children, isInitiallyOpen, classProperties }) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen); // Pass initial state
  const animation = useRef(new Animated.Value(isInitiallyOpen ? 1 : 0)).current; // Animated value to control height

  const toggleAccordion = () => {
    const initialValue = isOpen ? 1 : 0;
    const finalValue = isOpen ? 0 : 1;

    setIsOpen(!isOpen);

    Animated.timing(animation, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false, // Disable native driver for height animation
    }).start();
  };

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
        {/* Title and Icon */}
        <Text className="font-psemibold text-base">{title}</Text>
        <MaterialCommunityIcons
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <Animated.View style={[styles.content, { height: "auto" }]}>
        {isOpen && <View style={styles.innerContent}>{children}</View>}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    flexDirection: "row", // Aligns text and icon in a row
    justifyContent: "space-between", // Space between the text and the icon
    alignItems: "center", // Vertically centers the content
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  innerContent: {
    padding: 15,
    backgroundColor: "#f9f9f9",
  },
});

export default Accordion;
