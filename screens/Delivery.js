import { featured } from "@/constants";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Feather from "react-native-vector-icons/Feather";

const Delivery = () => {
  const restaruant = featured.restaruants[0];
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      {/* Map view */}
      <MapView
        initialRegion={{
          latitude: 28.6139,
          longitude: 77.209,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ flex: 1 }}
      >
        <Marker
          coordinate={{ latitude: restaruant.lat, longitude: restaruant.lng }}
          title={restaruant.name}
        />
      </MapView>
      <View
        style={{
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          marginTop: -48,
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 20,
            paddingTop: 40,
          }}
        >
          <View style={{ marginLeft: 12 }}>
            <Text style={{ fontSize: 18, color: "Black", fontWeight: "bold" }}>
              Estimate Arrival
            </Text>
            <Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>
              20-30 Minutes
            </Text>
            <Text
              style={{
                marginTop: 8,
                fontSize: 14,
                color: "black",
                fontWeight: "bold",
              }}
            >
              Your Order is own its way!
            </Text>
          </View>
          <Image
            style={{ width: 80, height: 60 }}
            source={require("../assets/images/BoxIcon.png")}
          ></Image>
        </View>
        <View
          style={{
            backgroundColor: "orange",
            padding: 8,
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
            marginHorizontal: 8,
            borderRadius: 9999,
          }}
        >
          <View
            style={{
              padding: 4,
              borderRadius: 9999,
              backgroundColor: "rgba(255,255,255,0.4)",
            }}
          >
            <Image
              style={{ height: 64, width: 64, borderRadius: 9999 }}
              source={require("../assets/images/DrinkIcon.png")}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
              Aakash Sarawgi
            </Text>
            <Text style={{ fontSize: 13, fontWeight: "bold", color: "white" }}>
              Your Rider
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 12,
              gap: 4,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                padding: 8,
                borderRadius: 9999,
              }}
            >
              <Feather name="phone" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{
                backgroundColor: "white",
                padding: 8,
                borderRadius: 9999,
              }}
            >
              <Feather name="x" size={25} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({});
