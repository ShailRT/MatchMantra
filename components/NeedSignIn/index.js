import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { styles } from "./styles";

const NeedSignin = () => {
  return (
    <View style={styles.container}>
      <Text>You need to Sign In to use this functionality !</Text>
      <Link href="/sign-in">
        <Text>Sign In</Text>
      </Link>
    </View>
  );
};

export default React.memo(NeedSignin);
