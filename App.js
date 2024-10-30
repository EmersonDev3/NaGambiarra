// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import UsersScreen from './screens/UsersScreen';
import UserDetailsScreen from './screens/UserDetailsScreen'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Users" component={UsersScreen} />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// eve.holt@reqres.in
// cityslicka