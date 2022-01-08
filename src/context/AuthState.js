import React from 'react';
import AuthContext from "./AuthContext";

const AuthState = (props) => {
    return (
        <AuthContext.Provider value={{
            message: "this is from the context"
        }}> 
        {props.children}
            </AuthContext.Provider>
    );
};

export default AuthState;
