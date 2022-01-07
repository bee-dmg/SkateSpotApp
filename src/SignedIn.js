import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import {createUserWithEmailAndPassword, onAuthStateChanged,signOut, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase-config';


export default function SignedIn(props) {

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
  return(
      <Text>Welcome {props.user.email}</Text>)

}
