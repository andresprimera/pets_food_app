import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Routes, ModalRoutes} from './routes';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        {Routes.map((props, i) => {
          return <Stack.Screen {...props} key={`${props.name}-${i}`} />;
        })}
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        {ModalRoutes.map((props, i) => {
          return <Stack.Screen {...props} key={`${props.name}-${i}`} />;
        })}
      </Stack.Group>
    </Stack.Navigator>
  );
};
