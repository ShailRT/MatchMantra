import { View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  Ionicons,
  Feather,
  Octicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const FeedInfo = ({profile}) => {
  return (
    <View
      className="mx-4 mb-6"
      style={{
        backgroundColor: "white",
        padding: 10,
        paddingBottom: 0,
        borderRadius: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingTop: 5,
          alignItems: "center",
          gap: 20,
          borderBottomWidth: 0.8,
          borderBottomColor: "#E0E0E0",
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <MaterialCommunityIcons
            name="cake-variant-outline"
            size={22}
            color="black"
          />
          <Text className="font-pregular" style={{ fontSize: 15 }}>
            {profile?.age}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Ionicons name="person-outline" size={20} color="black" />
          <Text className="font-pregular" style={{ fontSize: 15 }}>
          {profile?.gender}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Ionicons name="magnet-outline" size={20} color="black" />
          <Text className="font-pregular" style={{ fontSize: 15 }}>
            Single
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Octicons name="home" size={20} color="black" />
          <Text className="font-pregular" style={{ fontSize: 15 }}>
          {profile?.city}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginTop: 15,
          borderBottomWidth: 0.8,
          borderBottomColor: "#E0E0E0",
          paddingBottom: 10,
        }}
      >
        <Ionicons name="bag-add-outline" size={20} color="black" />
        <Text className="font-pregular">
        {profile?.occupation}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginTop: 15,
          borderBottomWidth: 0.8,
          borderBottomColor: "#E0E0E0",
          paddingBottom: 10,
        }}
      >
        <SimpleLineIcons name="graduation" size={22} color="black" />
        <Text className="font-pregular">{profile?.education}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginTop: 15,
          borderBottomWidth: 0.8,
          borderBottomColor: "#E0E0E0",
          paddingBottom: 10,
        }}
      >
        <Ionicons name="book-outline" size={20} color="black" />
        <Text className="font-pregular">{profile?.religion}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginTop: 15,
          borderBottomWidth: 0.8,
          borderBottomColor: "#E0E0E0",
          paddingBottom: 10,
        }}
      >
        <Ionicons name="home-outline" size={20} color="black" />
        <Text className="font-pregular">{profile?.city}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginTop: 15,
          borderBottomWidth: 0.7,
          borderBottomColor: "#E0E0E0",
          paddingBottom: 10,
        }}
      >
        <Feather name="search" size={20} color="black" />
        <Text className="font-pregular">{profile?.genderMatch ? profile?.genderMatch : "Female"}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginTop: 15,
          paddingBottom: 12,
        }}
      >
        <Ionicons name="heart-outline" size={20} color="black" />
        <Text className="font-pregular">{profile?.bio}</Text>
      </View>
    </View>
  );
};

export default FeedInfo;
