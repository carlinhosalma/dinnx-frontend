import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Login">

             <Stack.Screen options={{headerShown:false , title: 'Overview'}} name="Login"  component={Login} />
    
    </Stack.Navigator>
  )
}
