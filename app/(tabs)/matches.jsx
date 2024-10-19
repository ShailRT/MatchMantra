import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ChevronRightIcon, StarIcon, SearchIcon } from "../../constants/icons";
import PreferenceBar from "../../components/PreferenceBar";
import { useState } from "react";
import LikeProfile from "../../components/LikeProfile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Matches = () => {
  const prefrenceList = [
    { id: 1, text: "", icon: SearchIcon },
    { id: 2, text: "Compatible" },
    { id: 3, text: "Active today" },
    { id: 4, text: "Nearby" },
    { id: 5, text: "Nearby" },
  ];

  const [activePrefrence, setActivePrefrence] = useState(prefrenceList[1]);

  return (
    <SafeAreaView className="pb-14">
      <View className="mt-16">
        <View className="px-6">
          <View className="justify-between items-start flex-row">
            <View>
              <Text className="font-psemibold text-3xl">Likes You</Text>
            </View>
            <View className="flex-row">
              <View className="mt-1.5">
                <MaterialCommunityIcons name="star-outline" size={30} />
              </View>
            </View>
          </View>
        </View>
        <FlatList
          className="px-6 h-20"
          contentContainerStyle={{
            alignItems: "center",
          }}
          // showsHorizontalScrollIndicator="false"
          data={prefrenceList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PreferenceBar
              activePrefrence={activePrefrence}
              setActivePrefrence={setActivePrefrence}
              item={item}
            />
          )}
          horizontal
        />
      </View>
      <FlatList
        className="mb-32"
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
          <LikeProfile image={item.image} name={item.name} />
        )}
        // showsVerticalScrollIndicator="false"
      />
    </SafeAreaView>
  );
};

export default Matches;
