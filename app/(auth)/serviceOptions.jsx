import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const serviceOptions = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
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
            <MaterialCommunityIcons
              name="handshake-outline"
              size={26}
              color="black"
            />
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
            marginTop: 15,
          }}
          className="font-psemibold text-xl"
        >
          Select your service
        </Text>
        <TouchableOpacity
          style={styles.box}
          className="mb-4 mt-10"
          onPress={() => router.replace("/(tabs)/feed")}
        >
          <ImageBackground
            source={{
              uri: "https://images.pexels.com/photos/25875617/pexels-photo-25875617/free-photo-of-indian-wedding-couple-kissing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }} // Replace with your image URL
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            <View style={styles.overlay}>
              <View style={styles.iconTextRow}>
                <Text style={styles.boxText} className="font-psemibold">
                  MATCHMAKING
                </Text>
                <View
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 22,
                    borderColor: "#fff",
                    borderWidth: 3,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="hand-heart"
                    size={21}
                    color="#fff" // Changed the icon color to white
                  />
                </View>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} className="mb-4">
          <ImageBackground
            source={{
              uri: "https://images.pexels.com/photos/2060239/pexels-photo-2060239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }} // Replace with your image URL
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            <View style={styles.overlay}>
              <View style={styles.iconTextRow}>
                <View
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 22,
                    borderColor: "#fff",
                    borderWidth: 3,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="currency-usd"
                    size={26}
                    color="#fff" // Changed the icon color to white
                  />
                </View>
                <Text className="font-psemibold" style={styles.boxText}>
                  SUBSCRIPTION
                </Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          className="mb-10"
          onPress={() => router.replace("/(tabs)/events")}
        >
          <ImageBackground
            source={{
              uri: "https://images.pexels.com/photos/2174662/pexels-photo-2174662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }} // Replace with your image URL
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            <View style={styles.overlay}>
              <View style={styles.iconTextRow}>
                <Text style={styles.boxText} className="font-psemibold">
                  DATING EVENTS
                </Text>
                <View
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 22,
                    borderColor: "#fff",
                    borderWidth: 3,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={22}
                    color="#fff" // Changed the icon color to white
                  />
                </View>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default serviceOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    marginTop: 30,
    marginHorizontal: 20,
    // marginTop: -30,
  },
  content: {
    flex: 1,
    padding: 5,
  },
  box: {
    flex: 1, // Each box takes equal space
    marginVertical: 5, // Slight margin between boxes
    marginHorizontal: 10, // Border thickness
    borderColor: "#000", // Border color
    borderRadius: 10, // Rounded corners for a softer look
    overflow: "hidden", // Ensures the border applies correctly with the background image
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
    justifyContent: "center", // Center the content inside the overlay
    alignItems: "center", // Center the content horizontally
    width: "100%", // Ensures the overlay covers the entire background image
  },
  iconTextRow: {
    flexDirection: "row", // Arrange items in a row (icon + text)
    alignItems: "center", // Align items in the center vertically
  },
  boxText: {
    color: "#fff", // White text color
    fontSize: 28,
    // fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.0)", // Transparent background for the text
    paddingHorizontal: 10, // Add space between icon and text
    paddingVertical: 10,
    borderRadius: 10,
  },
});
