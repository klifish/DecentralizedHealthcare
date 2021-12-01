import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginView from './src/login';
import RegisterView from './src/register-view';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={MainView}
        /> */}

        <Stack.Screen
          name="Login"
          component={LoginView}
        />

        <Stack.Screen
          name="Register"
          component={RegisterView}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
