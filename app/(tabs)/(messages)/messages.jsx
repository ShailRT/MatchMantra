import { View, Text, FlatList, Image } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StarIcon } from "../../../constants/icons";
import MessageItem from "../../../components/MessageItem";
import { UserContext } from "../../_layout";
import NeedSignIn from "../../../components/NeedSignIn";

const Messages = () => {
  const { user } = useContext(UserContext);

  return (
    <SafeAreaView>
      {!user?.token ? (
        <NeedSignIn />
      ) : (
        <>
          <View className="mt-16">
            <View className="px-6">
              <View className="justify-between items-start flex-row">
                <View>
                  <Text className="font-psemibold text-3xl">Matches</Text>
                </View>
              </View>
            </View>
          </View>
          <FlatList
            className="px-4 h-full mt-2"
            data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MessageItem />}
            scroll
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Messages;
