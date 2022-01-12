import React, { useContext } from "react";
import { styles } from "./Styles";
import { View, TextInput, Button } from "react-native";
import { auth } from "../firebase-config";
import { updateProfile } from "firebase/auth";

export default function DisplayNameSetup() {
  const { user, setUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const updateDisplayName = () => {
      const update = {
        displayName: displayName,
        photoURL: "test"
      };
       updateProfile(auth.currentUser, update);
       onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
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
        
        <Button title="Submit" onPress={updateDisplayName} />
      </View>
    </View>
  );
}
