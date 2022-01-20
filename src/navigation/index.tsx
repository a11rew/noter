import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from 'screens/Home';
import Header from 'components/Header';
import Edit from 'screens/Edit';
import New from 'screens/New';
import { NavigationStackParamList } from './types';

const Stack = createNativeStackNavigator<NavigationStackParamList>();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ header: () => <Header /> }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Edit"
        component={Edit}
        options={{ header: () => <Header withBack /> }}
      />
      <Stack.Screen
        name="New"
        component={New}
        {/*  Hide native header since New manages its own header */}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
