// In App.js in a new project

import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'deprecated-react-native-prop-types';

import Login from '../pages/Login';
import Type from '../pages/Staps/type';
import Driver from '../pages/Staps/Driver';
import Client from '../pages/Staps/Client';
import Option from '../pages/Option';
import Ride from '../pages/Ride';
import Home from '../pages/Home';
import Delivers from '../pages/Deliveries'
import Payment from '../pages/Staps/Payment'



const Stack = createNativeStackNavigator();

function Routes() {
  return (
  
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Login">
            <Stack.Screen options={{headerShown:false , title: 'Overview'}} name="Login"  component={Login} />
            <Stack.Screen options={{headerShown:false}} name="Type"  component={Type} />
            <Stack.Screen options={{headerShown:false}} name="Driver"  component={Driver} />
            <Stack.Screen options={{headerShown:false}} name="Client"  component={Client} />
            <Stack.Screen options={{headerShown:false}} name="Option"  component={Option} />
            <Stack.Screen options={{headerShown:false}} name="Ride"  component={Ride} />
            <Stack.Screen options={{headerShown:false}} name="Home"  component={Home} />
            <Stack.Screen options={{headerShown:false}} name="Delivers"  component={Delivers} />
            <Stack.Screen options={{headerShown:false}} name="Payment"  component={Payment} />
            
            
        </Stack.Navigator>

    </NavigationContainer>
  );
}



export default Routes;
