import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect ,useContext} from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { SignUpContext } from "../_layout";
import * as ImagePicker from 'expo-image-picker';
import { removeProfileImage, setProfileImage } from "../../utils/backendCalls";
import { createDataForImage, createDataForImageRemove } from "../../utils/payloadUtils";

const PhotoScreen = ({ navigation }) => {
  const { signUpForm, setSignUpForm } = useContext(SignUpContext);
  const [photo, setPhoto] = useState(null);

  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  // requestPermission 
  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  };


  const selectPhoto = async () => {
    // const hasPermission = await requestPermission();
    // if (!hasPermission) return;
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setPhoto(result.assets[0].uri); // `assets` is an array, use the first one
      }
      console.log("result from picker ",result.assets[0]);

      
    } catch (error) {
      console.error('Error selecting photo:', error);
    }
  };

  const handleAddImage = async () => {
    // Find the first empty slot in the array
    const index = imageUrls.findIndex((url) => url === "");
    if (index !== -1) {
      try{
        const updatedUrls = [...imageUrls];
        updatedUrls[index] = photo;
        setImageUrls(updatedUrls);
        setPhoto("");
        const formData= createDataForImage(photo, index);
        await setProfileImage(formData);
      }catch(error){
        console.log("error inside handleAddImage",error);
      }
 
    }
  };

  useEffect(() => {
    if(signUpForm?.profile_pictures){
      setImageUrls(signUpForm?.profile_pictures);
       
    }
  }, []);

  useEffect(()=>{
    if(photo!=null && photo!=""){
      handleAddImage();

    }
  },[photo])

  console.log("image urs: " , imageUrls);

  const handleNext = () => {
    if (imageUrls.length>0) {
      setSignUpForm({...signUpForm, profile_pictures: imageUrls })
      // Navigate to the next screen
      navigation.navigate("PreFinal");
    }else{
      // apply check
    }
  };


  const removeImage=async (index)=>{
    console.log("clicked remove image");
    if (index !== -1&& imageUrls[index]!= "" ) {
      try{
        const updatedUrls = [...imageUrls];
        updatedUrls[index] = ""; 
        setImageUrls(updatedUrls);
        setPhoto("");
        const data = createDataForImageRemove(index);
        await removeProfileImage(data);
      }catch(error){
        console.log("error in remove image ", error);
      }
    }
    
  }

  return (
    <SafeAreaView>
      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderColor: "black",
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="photo-camera-back" size={22} color="black" />
          </View>
          <Image
            style={{ width: 100, height: 40 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/10613/10613685.png",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            
            marginTop: 15,
          }}
        >
          Pick your videos and photos
        </Text>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",

              gap: 20,
            }}
          >
            {imageUrls?.slice(0, 3).map((url, index) => (
              <Pressable
                onPress= {()=>removeImage(index)}
                key={index}
                style={{
                  borderColor: "#581845",
                  borderWidth: url ? 0 : 2,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderStyle: "dashed",
                  borderRadius: 10,
                  height: 100,
                }}
              >
                {url ? (
                  <Image
                    source={{ uri: url }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      resizeMode: "cover",
                    }}
                  />
                ) : (
                  <EvilIcons name="image" size={22} color="black" />
                )}
              </Pressable>
            ))}
          </View>
        </View>
        {/* <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            {imageUrls?.slice(3, 6)?.map((url, index) => (
              <Pressable
                key={index}
                style={{
                  borderColor: "#581845",
                  borderWidth: url ? 0 : 2,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderStyle: "dashed",
                  borderRadius: 10,
                  height: 100,
                }}
              >
                {url ? (
                  <Image
                    source={{ uri: url }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      resizeMode: "cover",
                    }}
                  />
                ) : (
                  <EvilIcons name="image" size={22} color="black" />
                )}
              </Pressable>
            ))}
          </View>
        </View> */}

        <View style={{ marginVertical: 10 }}>
          <Text style={{ color: "gray", fontSize: 15 }}>Drag to reorder</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              color: "#581845",
              marginTop: 3,
            }}
          >
            Add three photos
          </Text>
        </View>

        <View style={{ marginTop: 25 }}>
          {/* <Text>Add a picture of yourself</Text> */}
          
          <Button
            // onPress={handleAddImage}
            onPress={selectPhoto}
            style={{ marginTop: 5 }}
            title="Add Image"
          />
        </View>

        <TouchableOpacity
          //   onPress={() => navigation.navigate('Prompts')}
          onPress={handleNext}
          activeOpacity={0.8}
          style={{ marginTop: 30, marginLeft: "auto" }}
        >
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            color="#581845"
            style={{ alignSelf: "center", marginTop: 20 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PhotoScreen;

const styles = StyleSheet.create({});
