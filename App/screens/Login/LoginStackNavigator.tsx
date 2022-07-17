import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {LoginRoutes} from './routes';

const Stack = createStackNavigator();

export const LoginStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {LoginRoutes.map((props, i) => {
        return <Stack.Screen {...props} key={`${props.name}-${i}`} />;
      })}
    </Stack.Navigator>
  );
};
