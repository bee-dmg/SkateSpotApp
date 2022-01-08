import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/Main";

import AuthState from "./src/context/AuthState";

export default function App() {
  return (
  <AuthState>      
    <View style={styles.container}>
        <Main />
        <StatusBar style="auto" />
      </View>
      </AuthState>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
