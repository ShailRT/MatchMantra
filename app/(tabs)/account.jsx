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
import { UserContext } from "../_layout";
import AsyncStorage from "@react-native-async-storage/async-storage";


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
          <TouchableOpacity onPress={logout}>
            <View>
              <AntDesign name="infocirlce" size={24} color="black" />
            </View>
          </TouchableOpacity>

          <AntDesign name="setting" size={24} color="black" />
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
              uri: "https://m.media-amazon.com/images/I/61KpZVl3bfL._AC_UF1000,1000_QL80_.jpg",
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
          source={{
            uri: "https://cdn.sanity.io/images/l7pj44pm/production/5f4e26a82da303138584cff340f3eff9e123cd56-1280x720.jpg",
          }}
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
          <Text style={{ fontSize: 15, fontWeight: "600" }}>Boost</Text>
          <Text style={{ color: "gray", marginTop: 3 }}>
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
          <Text style={{ fontSize: 15, fontWeight: "600" }}>Roses</Text>
          <Text style={{ color: "gray", marginTop: 3 }}>
            2x as likely to lead to a date
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default account;
