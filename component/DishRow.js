import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

const DishRow = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 12,
        borderRadius: 24,
        elevation: 24,
        marginBottom: 12,
        marginHorizontal: 8,
      }}
    >
      <Image
        style={{ borderRadius: 24, height: 100, width: 100 }}
        source={item.image}
      />
      <View style={{ flex: 1, marginBottom: 12 }}>
        <View style={{ paddingLeft: 12 }}>
          <Text style={{ fontSize: 20 }}>{item.name}</Text>
          <Text style={{ fontSize: 15, color: "gray" }}>
            {item.description}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 12,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "gray",
              fontWeight: "bold",
              color: "#374151",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {item.price}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <TouchableOpacity
              style={{
                padding: 4,
                borderRadius: 9999,
                backgroundColor: "orange",
              }}
            >
              <Feather name="minus" size={15} color="white" />
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: 12 }}>2</Text>
            <TouchableOpacity
              style={{
                padding: 4,
                borderRadius: 9999,
                backgroundColor: "orange",
              }}
            >
              <Feather name="plus" size={15} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;

const styles = StyleSheet.create({});
