import React, {useContext} from "react";
import {Text, View } from "react-native";
import AuthContext from "./context/AuthContext";



export default function SignedIn(props) {
 const {message, user} = useContext(AuthContext);

  return(
      <View><Text>Welcome {user.email}
      </Text>{message}
      </View>)




}
