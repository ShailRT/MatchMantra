import { StatusBar } from "expo-status-bar";
import {  Text,  View } from "react-native";
import { Link ,Redirect,router} from "expo-router";
import { useContext } from "react";
import { UserContext } from "./_layout";

export default function App() {
  const {user}= useContext(UserContext);

  if(user?.token){
    return <Redirect href="(temp)/" />
  }

  return (
    
      
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg font-pregular">MatchMantra!</Text>
        <Link href="/sign-in">
          <Text>Go To</Text>
        </Link>
  
        <StatusBar style="auto" />
      </View>


  );
}
