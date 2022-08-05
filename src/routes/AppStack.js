import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Type from "../pages/Staps/type";
import Driver from "../pages/Staps/Driver";
//import Client from '../pages/Staps/Client';
import Option from "../pages/Option";
import Ride from "../pages/Ride";
import Home from "../pages/Home";
import Deliveries from "../pages/Deliveries";
//import Payment from '../pages/Staps/Payment'

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Type">
     
        <Stack.Screen
          options={{ headerShown: false }}
          name="Type"
          component={Type}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Driver"
          component={Driver}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Option"
          component={Option}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Ride"
          component={Ride}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Deliveries"
          component={Deliveries}
        />
      </Stack.Navigator>
   
  );
}
