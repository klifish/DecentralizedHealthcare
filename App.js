import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './src/login';
import RegisterPage from './src/register';
import RolePage from './src/role';
import ProviderPage from './src/provider';
import RequesterPage from './src/requester';
import DatasetPage from './src/dataset';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Provider" component={ProviderPage} /> */}
        {/* <Stack.Screen name="Requester" component={RequesterPage} /> */}
        {/* <Stack.Screen name="Dataset" component={DatasetPage} /> */}

        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Role" component={RolePage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Provider" component={ProviderPage} />
        <Stack.Screen name="Requester" component={RequesterPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
