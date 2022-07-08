import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Routes} from './routes';
import {colors} from '@app/theme';
import {BasketIcon, HomeIcon} from '@app/assets/svgs';

const Tab = createBottomTabNavigator();

export const ButtonNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // tabBarIcon: ({focused, color, size}) => {
        tabBarIcon: () => {
          let mainIcon = null;

          if (route.name === 'Home') {
            mainIcon = <HomeIcon />;
          } else if (route.name === 'Settings') {
            mainIcon = <BasketIcon />;
          }

          return mainIcon;
        },
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: colors.primary,
          height: 100,
        },
      })}>
      {Routes.map((props, i) => {
        return <Tab.Screen {...props} key={`${props.name}-${i}`} />;
      })}
    </Tab.Navigator>
  );
};
