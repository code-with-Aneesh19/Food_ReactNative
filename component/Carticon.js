import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Carticon = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{ position: "absolute", bottom: 20, width: "100%", zIndex: 50 }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("CartScreen")}
        style={{
          backgroundColor: "orange",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
          borderRadius: 9999,
          padding: 16,
          paddingHorizontal: 12,
          shadowColor: "#000",
          elevation: 8,
        }}
      >
        <View
          style={{
            padding: 8,
            paddingHorizontal: 16,
            borderRadius: 9999,
            backgroundColor: "gray",
            // backgroundColor: "red",
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              color: "white",
              fontSize: 18,
            }}
          >
            3
          </Text>
        </View>
        <Text
          style={{
            flex: 1,
            fontWeight: "800",
            color: "white",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          View Cart
        </Text>
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
          Rs. 199
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Carticon;

const styles = StyleSheet.create({});
