import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Login from "./login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { startClock } from "react-native-reanimated";
import Home from "./Home";

export default function Main() {
  const Stack = createNativeStackNavigator();
  return (
    <Login />
 
  );
}
