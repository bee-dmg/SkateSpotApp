import React, {useState, useContext} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import {createUserWithEmailAndPassword, onAuthStateChanged,signOut, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase-config';
import SignedIn from './SignedIn'
import { authContext } from "./context/AuthContext";

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
    },
    center: {
    
      justifyContent: "center",
      margin: 5,
      paddingTop:50,

      
    }
  });



  const [loginEmail, setLoginEmail] = useState(""); // in User context now
  const [loginPassword, setLoginPassword] = useState(""); // in user context now
  const [user, setUser] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })
  const register = async () => {
try{
   const user = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
   console.log(user);
  } catch(error){
    console.log(error.message);
  }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      
    }
  }

  const logout = async () => {
    await signOut(auth);

  }
  if(!user){return (
    <View>
      <View>
        <TextInput editable style={styles.input} placeholder="Email" onChange={(event) => {setLoginEmail(event.target.value)}}/>
      </View>
      <View>
        
        <TextInput editable style={styles.input} secureTextEntry="true" placeholder="Password" onChange={(event) => {setLoginPassword(event.target.value)}} />
      </View>
      <View style={styles.fixToText}>
        <Button title="Sign Up" onPress={register}/> 
        <Button title="Login" onPress={login} /> 
      </View>
      </View>
      
    
  )}
  else {return(<View><View style={styles.center}><Button title="Sign Out" onPress={logout} /></View><SignedIn user={user}/> </View>)
}
}
