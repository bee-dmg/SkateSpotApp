import React, { useContext, useState, useEffect } from "react";
import { styles } from "./Styles";
import { View, TextInput, Button } from "react-native";
import { auth } from "../firebase-config";
import { onAuthStateChanged, updateProfile, signOut } from "firebase/auth";

import AuthContext from "../context/AuthContext";


export default function DisplayNameSetup() {
  const { user, setUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const logout = async () => {
    await signOut(auth);
  };
  const updateDisplayName = async () => {
    try{
      const update = {
        displayName: displayName,
        photoURL: "test"
      };
      
       updateProfile(auth.currentUser, update);
       onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);})
       
        console.log(user);
      }
        catch(error){console.log(error.message);}
        
      };
    return (
    <View>
      <View>
        <TextInput
          editable
          style={styles.input}
          placeholder="Display Name"
          onChange={(event) => {
            setDisplayName(event.target.value);
          }}
        />
      </View>
      
      <View>
        
        <Button title="Submit" onPress={() => {updateDisplayName(); window.location.reload(false);}} />
      </View>
      
    </View>
  );
        }
   
      

