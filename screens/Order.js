import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Order = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/images/delivery.gif")}
        style={{ height: 320, width: 320 }}
      />
    </SafeAreaView>
  );
};

export default Order;

const styles = StyleSheet.create({});
