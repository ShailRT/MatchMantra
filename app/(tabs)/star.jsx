import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/userReducer";

const star = () => {
  const dispatch = useDispatch();
  const Logout = async () => {
    try {
      AsyncStorage.clear();
      dispatch(setToken(""));
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-pregular">Feed Page </Text>
      <TouchableOpacity onPress={Logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default star;
