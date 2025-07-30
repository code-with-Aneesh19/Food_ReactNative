import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Carticon from "../component/Carticon";
import DishRow from "../component/DishRow";

const Restaurant = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const item = params;

  const screenWidth = Dimensions.get("window").width;

  return (
    <View>
      <Carticon />
      <StatusBar style="light" />
      <ScrollView>
        <View style={{ width: screenWidth, height: 288 }}>
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: "90%",
              resizeMode: "cover",
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              marginTop: 56,
              backgroundColor: "e4e8ec",
              padding: 8,
              borderRadius: 9999,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              elevation: 5,
            }}
          >
            <Feather
              name="arrow-left"
              size={20}
              color="orange"
              // backgroundColor="rgba(251,146,60)"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: "white",
            marginTop: -48,
            paddingTop: 24,
          }}
        >
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontsize: 30, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 7 }}
            >
              {" "}
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
              >
                <Image
                  source={require("../assets/images/BoxIcon.png")}
                  style={{ height: 16, width: 16 }}
                />
                <Text style={{ fontSize: 12 }}>
                  <Text style={{ color: "green" }}>{item.star}</Text>
                  <Text style={{ color: "gray" }}>
                    ({item.reviews} reviews) .
                    <Text style={{ fontWeight: "semibold" }}>
                      {item.categories}
                    </Text>
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  // justifyContent: "center",
                  alignItem: "center",
                  gap: 4,
                }}
              >
                <Feather name="map-pin" size={15} color="gray" />
                <Text style={{ color: "gray", fontSize: 12 }}>
                  Nearby. {item.address}
                </Text>
              </View>
            </View>
            <Text style={{ color: "gray", marginTop: 8 }}>
              {item.description}
            </Text>
          </View>
        </View>
        <View style={{ paddingBottom: 144, backgroundColor: "white" }}>
          <Text
            style={{
              paddingHorizontal: 16,
              paddingVertical: 16,
              fontsize: 24,
              fontWeight: "bold",
            }}
          >
            Menu
          </Text>
          {/* dishes */}
          {item.dishes.map((dish, index) => (
            <DishRow item={{ ...dish }} key={"index"} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
