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
            data={[
              {
                id: 1,
                name: "Kevin",
                image:
                  "https://christophertoddstudios.com/wp-content/uploads/2022/02/online-dating-KevinBrookim-Onlinedating-82-683x1024.jpg",
              },
              {
                id: 2,
                image:
                  "https://www.heysaturday.co/wp-content/uploads/2021/09/Best-Dating-Profile-Photos.jpg",
                name: "Laila",
              },
              {
                id: 3,
                name: "Brandy",
                image:
                  "https://i.pinimg.com/736x/ae/b4/27/aeb4271447a6f26baa4b95b8766b0242.jpg",
              },
            ]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MessageItem image={item.image} name={item.name} />
            )}
            scroll
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Messages;
