import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Routes} from './routes';
const Tab = createBottomTabNavigator();

export const ButtonNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}>
      {Routes.map((props, i) => {
        return <Tab.Screen {...props} key={`${props.name}-${i}`} />;
      })}
    </Tab.Navigator>
  );
};
