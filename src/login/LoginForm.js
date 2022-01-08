import React, {useState} from 'react';
import { View, TextInput, Button } from "react-native";
import { styles } from "./Styles";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase-config';

export default function LoginForm (){
    const [loginEmail, setLoginEmail] = useState(""); 
    const [loginPassword, setLoginPassword] = useState(""); 
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
    return(  <View>
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
        </View>)
};