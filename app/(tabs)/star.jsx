import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../_layout";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const star = () => {
  const {setUser} = useContext(UserContext)

  const Logout=async()=>{
    try{
        setUser({});
        AsyncStorage.clear();
        router.replace("/");
    }catch(error){
        console.log(error);
    }
  }
  return (
    <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-lg font-pregular">Feed Page </Text>
    <TouchableOpacity onPress={Logout}>
      <Text >Logout</Text>
    </TouchableOpacity>
  </View>
  );
};

export default star;
