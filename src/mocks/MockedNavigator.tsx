import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

interface Props {
  component: React.ComponentType<any>;
  params: any;
}

const Stack = createNativeStackNavigator();

const MockedNavigator = ({ component, params }: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;

// <NavigationContainer>
// <Stack.Navigator>
//   <Stack.Screen
//     name="MockedScreen"
//     component={component}
//     initialParams={params}
//   />
// </Stack.Navigator>
// </NavigationContainer>
