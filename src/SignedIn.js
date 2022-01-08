import React, {useContext} from "react";
import {Text, View } from "react-native";
import AuthContext from "./context/AuthContext";



export default function SignedIn() {
 const {message, user} = useContext(AuthContext);

  return(
      <Text>Welcome {user.email}
      </Text>
      )




}
