import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'screens/Home';
import Header from 'components/Header';
import Edit from 'screens/Edit';
import { NavigationStackParamList } from './types';
import New from 'screens/New';

const Stack = createNativeStackNavigator<NavigationStackParamList>();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{ header: Header }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Edit" component={Edit} />
      <Stack.Screen name="New" component={New} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
