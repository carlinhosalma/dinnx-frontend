// In App.js in a new project

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import AuthContext from "../Contexts/Auth";

function Routes() {
  const [authData, setAuthData] = useState();
  const [isLoading, setisLoading] = useState(true);

  // console.log(authData);

  return (
    <AuthContext.Provider value={{ signed: true }}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default Routes;
