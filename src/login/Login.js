import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import Home from "../Home";
import AuthContext from "../context/AuthContext";
import { styles } from "./Styles";
import LoginForm from "./LoginForm";

export default function Login() {
  const { user, setUser } = useContext(AuthContext);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };
  if (!user) {
    return <LoginForm />;
  } else {
    return (
      <View>
        <Home/>
        <View style={styles.center}>
          <Button title="Log Out" onPress={logout} />
        </View>
      </View>
    );
  }
}
