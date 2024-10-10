import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronRightIcon, StarIcon, SearchIcon } from "../../constants/icons";
import ImageCard from "../../components/ImageCard";
import RejectBtn from "../../components/RejectBtn";
import PreferenceBar from "../../components/PreferenceBar";
import { useState, useContext, useEffect } from "react";
import PromptCard from "../../components/PromptCard";
import { UserContext } from "./../_layout";
import NeedSignIn from "../../components/NeedSignIn";
import { getMatchingProfile, likeProfile, skipProfile } from "../../utils/backendCalls";
import LikeBtn from "../../components/LikeBtn";


const feed = () => {
  const { user } = useContext(UserContext);
  const [profile,setProfile]= useState({});
  const [profilePictures,setProfilePictures]= useState([]);

  async function fetchProfile() {
    try{
        const profile= await getMatchingProfile(user.token);
        console.log("profile returned: "+ profile);
        if(profile){
          setProfile(profile);
        }
        
    }catch(error){
      console.log("error while getting profile: ", error);
    }
  }

  useEffect(()=>{
    if(user?.token){
      console.log("token kya h?"+user?.token);
     fetchProfile();
    }

  },[])

  
  useEffect(()=>{
    if(profile?.profile_pictures){
      setProfilePictures(JSON.parse(profile.profile_pictures));
    }else{
      setProfilePictures(null);
    }
    
  },[profile]);
  
  
  const handleReject=async()=>{
    console.log("tapped reject");
    try{
      const data={
        "user_id" : profile?.id
      }
      console.log("data: "+ data);
      skipProfile(data,user.token);
      fetchProfile();
    }catch(error){
      console.log("Error while calling skip api "+ error);
    }
  
  }

  const handleLike=async()=>{
    console.log("tapped like");
    try{
      const data={
        "user_id" : profile?.id
      }
      console.log("data: "+ data);
      likeProfile(data,user.token);
      fetchProfile();
    }catch(error){
      console.log("Error while calling skip api "+ error);
    }
  
  }


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
      {!user?.token ? (
        <NeedSignIn />
      ) : (
        <>
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

            data={profilePictures?.map((imageUrl,index)=>({
              id:index+1,
              image: "http://www.shaadimantraa.com/storage/profile_pictures/"+imageUrl
            }))}

            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return item.prompt ? (
                <PromptCard prompt={item.prompt} />
              ) : (
                <ImageCard image={item.image} />
              );
            }}
            ListHeaderComponent={() => (
              <View className="px-6">
                <View className="justify-between items-start flex-row mb-3">
                  <View>
                    <Text className="font-psemibold text-3xl">{profile?.name}</Text>
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
          
          <TouchableOpacity onPress={handleLike}>

          <LikeBtn />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleReject}>

            <RejectBtn />
          </TouchableOpacity>

         
        </>
      )}
    </SafeAreaView>
  );
};

export default feed;
