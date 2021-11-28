import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth, firebaseObject} from './firebase-config';

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

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
 console.log(firebaseObject);
 console.log(process.env.REACT_APP_API_KEY)
  const register = async () => {
try{
   const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
   console.log(user);
  } catch(error){
    console.log(error.message);
  }
  };
  const login = async () => {

  }

  const logout = async () => {

  }
  return (
    <View>
<View>
        <TextInput editable style={styles.input} placeholder="Register Email" onChange={(event) => {setRegisterEmail(event.target.value)}} />
      </View>
      <View>
        
        <TextInput editable style={styles.input} placeholder="Register Password" onChange={(event) => {setRegisterPassword(event.target.value)}}/>
      </View>


      <View>
        <TextInput editable style={styles.input} placeholder="Email" onChange={(event) => {setLoginEmail(event.target.value)}}/>
      </View>
      <View>
        
        <TextInput editable style={styles.input} placeholder="Password" onChange={(event) => {setLoginPassword(event.target.value)}} />
      </View>
      <View style={styles.fixToText}>
        <Button title="Sign Up" onClick={register()} /> 
        <Button title="Login" /> 
      </View>

      <View style={styles.center}><Button title="Sign Out"  /></View>
    </View>
  );
}
