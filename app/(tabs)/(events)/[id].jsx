import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronRightIcon } from "../../../constants/icons";
import WebView from "react-native-webview";
import axios from "axios";
import RazorpayCheckout from "react-native-razorpay";
import { MaterialIcons } from "@expo/vector-icons";

const eventDetails = () => {
  const { id } = useLocalSearchParams();
  const [razorResponse, setRazorResponse] = useState({});
  // useEffect(() => {
  //   const getRazorResponse = async () => {
  //     try {
  //       const response = await axios.post(
  //         "http://shaadimantraa.com/create-checkout-session",
  //         {
  //           event_id: 9,
  //         }
  //       );
  //       setRazorResponse(response.data);
  //       console.log("response ", response.data);
  //     } catch (error) {
  //       console.log("axios error events", error);
  //     }
  //   };
  //   getRazorResponse();
  // }, []);

  const handlePayment = () => {
    var options = {
      description: "Credits towards consultation",
      image: "https://i.imgur.com/3g7nmJC.png",
      currency: "INR",
      key: "rzp_test_2BFPuAnuz8ZT1a", // Your api key
      amount: "5000",
      name: "foo",
      prefill: {
        email: "void@razorpay.com",
        contact: "9191919191",
        name: "Razorpay Software",
      },
      theme: { color: "#F37254" },
    };
    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  return (
    <SafeAreaView className="h-screen pt-3">
      <TouchableOpacity onPress={() => router.back()}>
        <View className="flex-row items-center py-3 pl-4">
          <MaterialIcons name="arrow-back-ios-new" size={22} color="black" />

          <Text className="font-pregular text-base ml-1">{id}</Text>
        </View>
      </TouchableOpacity>
      <ScrollView>
        <View>
          <Image
            source={{ uri: "https://static.toiimg.com/photo/104553360.cms" }}
            className="w-full h-60 contain"
            resizeMode="cover"
          />
          <View className="px-5 pt-3">
            <Text className="font-psemibold text-xl">{id}</Text>
            <Text className="font-regular text-base">14 Aug 2024 onwards</Text>
            <View className="flex-row mt-2">
              <TouchableOpacity>
                <View className="px-4 h-8 items-center justify-center mr-2 rounded-full border-gray-100 border text-black-100 bg-blue-400/30">
                  <Text className="font-pmedium text-xs">Delhi NCR</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="px-4 h-8 items-center justify-center mr-2 rounded-full border-gray-100 border text-black-100 bg-blue-400/30">
                  <Text className="font-pmedium text-xs">Dating</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="px-5">
          <View className="mt-3 px-2 py-3">
            <Text className="font-pregular text-base">
              BookMyShow, the biggest online ticketing platform in India, spans
              five countries and nearly 60 cities. Their business model is a
              standout example—they earn through internet handling or
              convenience fees.
            </Text>
            <View className="w-full h-52 p-0">
              <WebView
                originWhitelist={["*"]}
                source={{
                  html: `
                    <html>
                        <body style="margin:0px; padding:0px;">
                            <iframe width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4163606676952!2d77.3132123!3d28.6172809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4c6efae0499%3A0xaf8d8e4ffe15e6d2!2sKeshav%20Puram%2C%20Mayur%20Vihar%20Phase%20I%2C%20Kalyan%20Puri%2C%20Delhi%2C%20110091!5e0!3m2!1sen!2sin!4v1728527114079!5m2!1sen!2sin" style="border:0; margin:0px; padding:0px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </body>
                    </html>`,
                }}
                // style={styles.map}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="flex-row w-full px-5 pt-3 pb-1 bottom-4 bg-secondary justify-center">
        <TouchableOpacity className="w-44" onPress={handlePayment}>
          <View className="px-4 h-12 items-center justify-center mr-2 rounded-full border-gray-100 border text-black-100">
            <Text className="font-pmedium">Buy Tickets</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="w-44">
          <View className="px-4 h-12 items-center justify-center mr-2 rounded-full border-gray-100 border text-black-100">
            <Text className="font-pmedium ">View People </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default eventDetails;
