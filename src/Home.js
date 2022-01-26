import React, { useContext } from "react";
import { Text } from "react-native";
import AuthContext from "./context/AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (<Text>Welcome {user.displayName} </Text>);
}
