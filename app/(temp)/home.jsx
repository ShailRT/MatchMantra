import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext }  from 'react'
import { UserContext } from '../_layout'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'



const Home = () => {
  const {User, setUser} = useContext(UserContext)

  const Logout=async()=>{
    try{
        setUser({});
        AsyncStorage.clear();
        console.log("user", User)
        router.replace("/");
    }catch(error){
        console.log(error);
    }
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-lg font-pregular">HOME PAGE!!!!</Text>
    <TouchableOpacity onPress={Logout}>
      <Text >Logout</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Home