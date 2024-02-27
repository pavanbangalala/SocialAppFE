import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamsList} from './types';
import Splash from '../screens/Splash';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator<AuthStackParamsList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
