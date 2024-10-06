import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StarIcon } from "../../constants/icons";
import MessageItem from "../../components/MessageItem";
import { useNavigation } from "expo-router";
const Messages = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="mt-16">
        <View className="px-6">
          <View className="justify-between items-start flex-row">
            <View>
              <Text className="font-psemibold text-3xl">Matches</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate("chat")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginVertical: 12,
        }}
      >
        <View>
          <Image style={{ width: 70, height: 70, borderRadius: 35 }} />
        </View>

        <View>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
              fontFamily: "GeezaPro-Bold",
            }}
          >
            Rahul
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginTop: 6,
            }}
          >
            {"Start Chat with Rahul"}
          </Text>
        </View>
      </Pressable>
      {/* <FlatList
        className="px-4 h-full mt-2"
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageItem />}
        scroll
      /> */}
    </SafeAreaView>
  );
};

export default Messages;
