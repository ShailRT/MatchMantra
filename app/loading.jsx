import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "moti";
import LottieView from "lottie-react-native";
import LikeAnimation from "../assets/like-2.json";
import LoveAnimation from "../assets/love.json";
import RejectAnimation from "../assets/reject.json";

const Loading = ({ loadingLabel }) => {
  console.log("loadingLabel", loadingLabel);
  if (loadingLabel === "like") {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <LottieView
          source={LikeAnimation}
          style={{
            height: 200,
            width: 250,
            alignSelf: "center",
            justifyContent: "center",
          }}
          autoPlay
          loop={false}
          speed={0.7}
        />
      </SafeAreaView>
    );
  } else if (loadingLabel === "reject") {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <LottieView
          source={RejectAnimation}
          style={{
            height: 160,
            width: 200,
            alignSelf: "center",
            justifyContent: "center",
          }}
          autoPlay
          loop={false}
          speed={0.7}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <LottieView
          source={LoveAnimation}
          style={{
            height: 200,
            width: 300,
            alignSelf: "center",
            justifyContent: "center",
          }}
          autoPlay
          loop={true}
          speed={0.7}
        />
      </SafeAreaView>
    );
  }
};

export default Loading;
