import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";

const ResturentCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      // onPress={() => navigation.navigate(restaruants, item)}
      onPress={() => navigation.navigate("Resturent", { ...item })}
    >
      <View
        style={{
          marginRight: 24,
          backgroundColor: "white",
          borderRadius: 24,

          // iOS shadow
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2, // Valid range: 0 to 1
          shadowRadius: 4,

          // Android shadow
          elevation: 5,
        }}
      >
        <Image
          style={{
            height: 144,
            width: 256,
            backgroundColor: "#BFDBFE",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}
          // source={require("../assets/images/Pizza.jpg")}
          source={item.image}
        />
        <View style={{ paddingHorizontal: 12, width: 256 }}>
          <Text
            style={{
              // paddingHorizontal: 12,
              paddingBottom: 16,
              fontWeight: "bold",
            }}
          >
            {item.name}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResturentCard;

const styles = StyleSheet.create({});
