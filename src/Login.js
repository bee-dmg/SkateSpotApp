import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Login() {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    fixToText: {
      flexDirection: "row",
      justifyContent: "space-between",
    }
  });
  return (
    <View>
      <View>
        <Text>Login</Text> 
        <TextInput editable style={styles.input} />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput editable style={styles.input} />
      </View>
      <View style={styles.fixToText}>
        <Button title="Sign Up" /> 
        <Button title="Login" /> 
      </View>
    </View>
  );
}
