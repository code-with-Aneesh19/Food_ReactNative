import { featured } from "@/constants";
import { useNavigation } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";

const CartScreen = () => {
  const restaruants = featured.restaruants[0];
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, marginTop: 16 }}>
      {/* backbutton */}
      <View style={{ position: "relative", paddingVertical: 16, elevation: 2 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "orange",
            position: "absolute",
            zIndex: 10,
            borderRadius: 9999,
            padding: 12,
            elevation: 2,
            top: 20,
            left: 8,
          }}
        >
          <Feather name="arrow-left" size={15} color="white" />
        </TouchableOpacity>
        <View>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Your Cart
          </Text>
          <Text style={{ textAlign: "center", color: "gray" }}>
            {restaruants.name}
          </Text>
        </View>
      </View>
      {/* delivery time */}

      <View
        style={{
          backgroundColor: "#ffd1b3",
          flexDirection: "row",
          paddingVertical: 16,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/Aneesh.png")}
          style={{ width: 80, height: 80 }}
        />
        <Text style={{ flex: 1, paddingLeft: 16 }}>
          Delivery in 20-30 Minutes
        </Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: "bold", color: "Black", paddingRight: 8 }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        style={{ backgroundColor: "white", paddingTop: 20 }}
      >
        {restaruants.dishes.map((dish, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                flexDirection: "row",
                paddingVertical: 8,
                paddingHorizontal: 16,
                backgroundColor: "white",
                borderRadius: 24,
                marginHorizontal: 8,
                marginBottom: 12,
                shadowColor: "#000",
                elevation: 3,
                gap: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "orange" }}>2 x</Text>
              <Image
                style={{
                  height: 56,
                  width: 56,
                  borderRadius: 9999,
                  gap: 5,
                }}
                source={dish.image}
              />
              <Text style={{ flex: 1, fontWeight: "bold", color: "black" }}>
                {dish.name}
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontWeight: "bold",
                  color: "black",
                  fontSize: 16,
                }}
              >
                {dish.price}
              </Text>
              <TouchableOpacity
                style={{
                  padding: 4,
                  borderRadius: 9999,
                  backgroundColor: "orange",
                }}
              >
                <Feather name="minus" size={15} color="white" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* totals */}
      <View
        style={{
          paddingHorizontal: 32,
          padding: 24,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          marginBottom: 16,
          backgroundColor: "#ffd1b3",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "gray" }}>Subtotal</Text>
          <Text style={{ color: "gray" }}>Rs. 199</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "gray" }}>Delivery Fee</Text>
          <Text style={{ color: "gray" }}>Rs. 20</Text>
        </View>
        <View
          style={{ height: 1, backgroundColor: "black", marginVertical: 12 }}
        ></View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "gray", fontWeight: "bold" }}>Order Total</Text>
          <Text style={{ color: "gray", fontWeight: "bold" }}>Rs. 219</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Order");
            }}
            style={{
              backgroundColor: "orange",
              padding: 12,
              borderRadius: 9999,
              marginTop: 12,
            }}
          >
            <Text
              style={{
                color: "Orange",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
