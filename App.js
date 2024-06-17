// External imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Internal imports
import LoginPage from './src/pages/login';
import RegisterPage from './src/pages/register';
import RolePage from './src/pages/role';
import ProviderPage from './src/pages/provider';
import RequesterPage from './src/pages/requester';
import DatasetPage from './src/pages/dataset';

const Stack = createNativeStackNavigator();

// Screen names
const SCREENS = {
  LOGIN: 'Login',
  REGISTER: 'Register',
  ROLE: 'What do you want to do?',
  REQUEST_DATASET: 'Request dataset',
  PROVIDE_DATASET: 'Provide dataset',
  DATASET: 'Dataset',
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.LOGIN} component={LoginPage} />
        <Stack.Screen name={SCREENS.REGISTER} component={RegisterPage} />
        <Stack.Screen name={SCREENS.ROLE} component={RolePage} />
        <Stack.Screen name={SCREENS.REQUEST_DATASET} component={RequesterPage} />
        <Stack.Screen name={SCREENS.PROVIDE_DATASET} component={ProviderPage} />
        <Stack.Screen name={SCREENS.DATASET} component={DatasetPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
