import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ResturentCard from "../component/ResturentCard";

const FeatutedRow = ({ title, description, restaruants }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
          <Text style={{ color: "#6B7280", fontSize: 15 }}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: "#f97316", fontWeight: "600", fontSize: 16 }}>
            See All{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        style={{
          overflow: "visible",
          paddingVertical: 20,
        }}
      >
        {restaruants.map((restaruant, index) => {
          return <ResturentCard item={restaruant} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeatutedRow;

const styles = StyleSheet.create({});
