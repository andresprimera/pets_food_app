import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Routes} from './routes';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {Routes.map((props, i) => {
        return <Stack.Screen {...props} key={`${props.name}-${i}`} />;
      })}
    </Stack.Navigator>
  );
};
