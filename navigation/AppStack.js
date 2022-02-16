import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, AddDogScreen } from '../screens';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='AddDog' component={AddDogScreen} />
    </Stack.Navigator>
  );
};
