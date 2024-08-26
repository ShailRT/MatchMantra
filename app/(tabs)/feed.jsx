import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronRightIcon, StarIcon } from "../../constants/icons";
import ImageCard from "../../components/ImageCard";
import RejectBtn from "../../components/RejectBtn";

const feed = () => {
  return (
    <View>
      <SafeAreaView edges={["right", "left", "top"]}>
        <FlatList
          data={[
            {
              id: 1,
              image:
                "https://m.media-amazon.com/images/I/61KpZVl3bfL._AC_UF1000,1000_QL80_.jpg",
            },
            {
              id: 2,
              image:
                "https://i.pinimg.com/736x/73/3b/5d/733b5dbf63c4031666f395c52c5a4633.jpg",
            },
            {
              id: 3,
              image:
                "https://miro.medium.com/v2/resize:fit:640/1*3YDzpCrL_6qO1wv0Gq4akw.jpeg",
            },
          ]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ImageCard image={item.image} />}
          ListHeaderComponent={() => (
            <View className="px-4">
              <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text className="font-psemibold text-3xl">Courtney</Text>
                </View>
                <View className="flex-row">
                  <View className="mt-1.5">
                    <Image
                      source={StarIcon}
                      className="w-5 h-5"
                      resizeMode="contain"
                    />
                  </View>
                  <View className="mt-1.5 ml-5 mr-2">
                    <Image
                      source={ChevronRightIcon}
                      className="w-5 h-5"
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </SafeAreaView>

      <RejectBtn />
    </View>
  );
};

export default feed;
