import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {CheckoutRoutes} from './CheckoutRoutes';

const Stack = createStackNavigator();

export const CheckoutStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {CheckoutRoutes.map((props, i) => {
        return <Stack.Screen {...props} key={`${props.name}-${i}`} />;
      })}
    </Stack.Navigator>
  );
};
