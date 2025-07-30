import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import CartScreen from "./screens/CartScreen";
import Delivery from "./screens/Delivery";
import HomeScreen from "./screens/HomeScreen";
import Order from "./screens/Order";
import Resturent from "./screens/Resturent";

const Stack = createNativeStackNavigator();

const navigation = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Resturent" component={Resturent} />
      <Stack.Screen
        name="CartScreen"
        options={{ presentation: "modal" }}
        component={CartScreen}
      />
      <Stack.Screen
        name="Order"
        // options={{ presentation: "fulScreenModel" }}
        component={Order}
      />
      <Stack.Screen
        name="Delivery"
        // options={{ presentation: "fulScreenModel" }}
        component={Delivery}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default navigation;

const styles = StyleSheet.create({});
