import React, { useContext } from "react";
import { Text, View } from "react-native";
import AuthContext from "./context/AuthContext";

export default function Home() {
  const { message, user } = useContext(AuthContext);

  return (<Text>Welcome {user.displayName} </Text>);
}
