import React, {useState, createContext} from "react";

export const UserContext = createContext();

export const UserProvider = props => {
    
        const [loginEmail, setLoginEmail] = useState("");
        const [loginPassword, setLoginPassword] = useState("");
    return (
        <UserContext.Provider>
            {props.children}
        </UserContext.Provider>

    );
}