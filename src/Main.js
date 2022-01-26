import React from "react";
import Login from "./login/Login";
import { ThemeProvider } from "react-native-elements";

export default function Main() {
  return (
    <ThemeProvider>
      <Login />
    </ThemeProvider>
    
  );
}
