import React, {useContext} from "react";
import {Text, View } from "react-native";

import { UserContext } from "./context/UserContext";


export default function SignedIn(props) {
    const userContext = useContext(UserContext);

  return(
      <View><Text>Welcome {props.user.email}
      </Text>
      </View>)




}
