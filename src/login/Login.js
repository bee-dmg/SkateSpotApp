import React, { useContext } from "react";
import {  View, Button } from "react-native";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import Home from "../Home";
import AuthContext from "../context/AuthContext";
import { styles } from "./Styles";
import LoginForm from "./LoginForm";
import DisplayNameSetup from "./DisplayNameSetup";

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
  }
  if(!user.displayName){
    return(<View> <View><DisplayNameSetup/></View>
    
      
      </View>)
  } if(user.displayName) {
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
