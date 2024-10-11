import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronRightIcon,
  StarIcon,
  SearchIcon,
} from "../../../constants/icons";
import EventCard from "../../../components/EventCard";
import RejectBtn from "../../../components/RejectBtn";
import PreferenceBar from "../../../components/PreferenceBar";
import { useState, useContext, useEffect } from "react";
import PromptCard from "../../../components/PromptCard";
import { UserContext } from "../../_layout";
import NeedSignIn from "../../../components/NeedSignIn";
import {
  getMatchingProfile,
  likeProfile,
  skipProfile,
} from "../../../utils/backendCalls";
import LikeBtn from "../../../components/LikeBtn";
import { getEvents } from "../../../utils/backendCalls";

const events = () => {
  const { user } = useContext(UserContext);
  const [events, setEvents] = useState([]);
  const [profile, setProfile] = useState({});
  const [profilePictures, setProfilePictures] = useState([]);

  async function fetchProfile() {
    try {
      const profile = await getMatchingProfile(user.token);
      console.log("profile returned: " + profile);
      if (profile) {
        setProfile(profile);
      }
    } catch (error) {
      console.log("error while getting profile: ", error);
    }
  }

  useEffect(() => {
    const getEventsFromApi = async () => {
      const api_events = await getEvents();
      console.log("api_events ", api_events);
      setEvents(api_events);
    };
    getEventsFromApi();
  }, []);

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

      <FlatList
        className="mb-7"
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard image={item.event_image} title={item.name} id={item.id} />
        )}
        ListHeaderComponent={() => (
          <View className="px-6">
            <View className="justify-between items-start flex-row mb-3">
              <View>
                <Text className="font-psemibold text-3xl">Events</Text>
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
  );
};

export default events;
