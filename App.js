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
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Remove a navbar da tela de Login
        />
        <Stack.Screen 
          name="Users" 
          component={UsersScreen} 
          options={{ headerShown: false }} // Remove a navbar da tela de Users
        />
        <Stack.Screen 
          name="UserDetails" 
          component={UserDetailsScreen} 
          options={{ headerShown: false }} // Remove a navbar da tela de UserDetails
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// eve.holt@reqres.in
// cityslicka