import { featured } from "@/constants";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import Categories from "../component/Categories";
import FeatutedRow from "../component/FeatutedRow";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#e4e8ec", flex: 1 }}>
      <StatusBar style="dark" />

      {/* search bar  */}
      <View style={styles.container}>
        <View style={styles.view}>
          <Feather name="search" size={25} color="gray" />
          <TextInput
            placeholder="Restaurants"
            style={{ flex: 1, marginLeft: 8 }}
          />
          <View style={styles.loc}>
            <Feather name="map-pin" size={25} color="gray" />
            <Text style={{ color: "gray" }}>Narsinhpur</Text>
          </View>
        </View>
        <View
          style={{
            padding: 12,
            backgroundColor: "orange",
            borderRadius: 50,
          }}
        >
          <Feather name="sliders" size={20} color="white" />
        </View>
      </View>

      {/* Main  */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Categories />
        {/* feature  */}
        <View style={{ marginTop: 20 }}>
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeatutedRow
                key={index}
                title={item.title}
                restaruants={item.restaruants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 16,
    flexDirection: "row",
    paddingBottom: 8,
    backgroundColor: "#f0f8ff",
    gap: 8,
  },
  view: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 12,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    backgroundColor: "white",
  },
  loc: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8,
    borderLeftWidth: 2,
    borderLeftColor: "#D1D5DB",
    borderWidth: 0,
  },
});
