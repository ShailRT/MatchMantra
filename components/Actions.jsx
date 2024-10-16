import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
// import tw from "tailwind-react-native-classnames";
import { Ionicons, Feather } from "@expo/vector-icons";

const Actions = () => {
  return (
    <View className="flex flex-row justify-between items-center p-1 h-14 w-full bottom-5 absolute">
      <View className="flex-1 flex-row bg-white rounded-full ml-2 justify-between">
        <Feather className="m-2 rounded-full p-2" name="smile" />

        <TextInput
          style={styles.input}
          placeholder="Type a mess..."
          underlineColorAndroid="transparent"
        />
        <Ionicons
          className="rounded-full py-4"
          Style={{
            transform: [{ rotate: "-40deg" }, { scale: 1.2 }],
          }}
          name="attach"
        />
        <Ionicons
          className="ml-2 rounded-full py-4 px-4"
          name="camera"
          solid={true}
        />
      </View>

      {/* <Icon
        style="mx-2 rounded-full  bg-green-700 p-4"
        name="mic"
        color="white"
        type="FontAwesome5"
      /> */}
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  input: {
    width: 120,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
});
