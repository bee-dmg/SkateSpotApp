import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import {createUserWithEmailAndPassword, onAuthStateChanged,signOut, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase-config';

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


  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
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
{/* <View>
        <TextInput editable style={styles.input} placeholder="Register Email" onChange={(event) => {setRegisterEmail(event.target.value)}} />
      </View>
      <View>
        
        <TextInput editable style={styles.input} secureTextEntry="true" placeholder="Register Password" onChange={(event) => {setRegisterPassword(event.target.value)}}/>
      </View> */}


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
  else {return(<View><View style={styles.center}><Button title="Sign Out" onPress={logout} /></View>
      <Text>Welcome {user?.email}</Text></View>)
}}
