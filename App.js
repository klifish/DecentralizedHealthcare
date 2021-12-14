import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './src/pages/login';
import RegisterPage from './src/pages/register';
import RolePage from './src/pages/role';
import ProviderPage from './src/pages/provider';
import RequesterPage from './src/pages/requester';
import DatasetPage from './src/pages/dataset';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Provider" component={ProviderPage} /> */}
        {/* <Stack.Screen name="Requester" component={RequesterPage} /> */}
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Role" component={RolePage} />

        <Stack.Screen name="Provider" component={ProviderPage} />
        <Stack.Screen name="Requester" component={RequesterPage} />
        <Stack.Screen name="Dataset" component={DatasetPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
