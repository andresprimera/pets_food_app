import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainBottomTabParamList} from './RouteTypes';

import {ButtonRoutes} from './routes';
import {colors} from '@app/theme';
import {BasketIcon, HomeIcon} from '@app/assets/svgs';
import PersonIcon from '@app/assets/svgs/PersonIcon';

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

export const ButtonNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // tabBarIcon: ({focused, color, size}) => {
        tabBarIcon: () => {
          let mainIcon = null;

          if (route.name === 'Home') {
            mainIcon = <HomeIcon />;
          } else if (route.name === 'Basket') {
            mainIcon = <BasketIcon />;
          } else if (route.name === 'Profile') {
            mainIcon = <PersonIcon />;
          }

          return mainIcon;
        },
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: colors.primary,
          paddingTop: 10,
        },
      })}>
      {ButtonRoutes.map((props, i) => {
        return <Tab.Screen {...props} key={`${props.name}-${i}`} />;
      })}
    </Tab.Navigator>
  );
};
