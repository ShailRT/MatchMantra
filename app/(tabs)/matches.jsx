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
    <SafeAreaView>
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
            image:
              "https://m.media-amazon.com/images/I/61KpZVl3bfL._AC_UF1000,1000_QL80_.jpg",
          },
          {
            id: 2,
            image:
              "https://i.pinimg.com/736x/73/3b/5d/733b5dbf63c4031666f395c52c5a4633.jpg",
            prompt: {
              title: "I'm looking for",
              message: "Shailesh Rawat",
            },
          },
          {
            id: 3,
            image:
              "https://miro.medium.com/v2/resize:fit:640/1*3YDzpCrL_6qO1wv0Gq4akw.jpeg",
          },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LikeProfile image={item.image} />}
        // showsVerticalScrollIndicator="false"
      />
    </SafeAreaView>
  );
};

export default Matches;
