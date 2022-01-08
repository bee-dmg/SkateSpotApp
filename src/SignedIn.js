import React, {useContext} from "react";
import {Text, View } from "react-native";

import { authContext } from "./context/AuthContext";


export default function SignedIn(props) {
    // const authContext = useContext(authContext);

  return(
      <View><Text>Welcome {props.user.email}
      </Text>
      </View>)




}
