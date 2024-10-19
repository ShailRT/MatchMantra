import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { useContext } from "react";
import { UserContext } from "../../_layout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { images } from "../../../constants";
const account = () => {
  const { user, setUser } = useContext(UserContext);

  const logout = async () => {
    try {
      setUser({});
      AsyncStorage.clear();
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Image
            style={{ width: 85, height: 55, resizeMode: "cover" }}
            source={{
              uri: "https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Hinge-App-900x0.png",
            }}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <MaterialCommunityIcons name="tune-vertical" size={27} />
          <TouchableOpacity onPress={logout}>
            <View>
              <MaterialCommunityIcons name="logout" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("./accountSettings")}>
            <AntDesign name="setting" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pressable
        // onPress={() =>
        //   navigation.navigate('Details', {
        //     currentProfile: currentProfile,
        //   })
        // }
        >
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              resizeMode: "cover",
              borderColor: "#662d91",
              borderWidth: 3,
              alignSelf: "center",
            }}
            source={{
              uri: "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              justifyContent: "center",
              marginTop: 12,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "600",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="font-psemibold"
            >
              {user.user?.name}
            </Text>
            <MaterialIcons name="verified" size={22} color="#662d91" />
          </View>
        </Pressable>
      </View>
      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
        <Image
          style={{ height: 220, width: "100%", borderRadius: 10 }}
          source={images.shaadiLogo}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          marginVertical: 20,
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          borderColor: "#E0E0E0",
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
        }}
      >
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: "#006A4E",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="lightning-bolt-outline"
            size={22}
            color="white"
          />
        </View>
        <View>
          <Text
            style={{ fontSize: 15, fontWeight: "600" }}
            className="font-psemibold"
          >
            Boost
          </Text>
          <Text style={{ color: "gray" }} className="font-pregular">
            Get seen by 11x more people
          </Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          borderColor: "#E0E0E0",
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
        }}
      >
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: "#F9629F",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="rose-outline" size={22} color="white" />
        </View>
        <View>
          <Text
            style={{ fontSize: 15, fontWeight: "600" }}
            className="font-psemibold"
          >
            Roses
          </Text>
          <Text style={{ color: "gray" }} className="font-pregular">
            2x as likely to lead to a date
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default account;
