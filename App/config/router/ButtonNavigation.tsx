import React from 'react';

import {View, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainBottomTabParamList} from './RouteTypes';

import {ButtonRoutes} from './routes';
import {colors} from '@app/theme';
import {BasketIcon, HomeIcon, ReceiptIcon} from '@app/assets/svgs';
import PersonIcon from '@app/assets/svgs/PersonIcon';

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

export const ButtonNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // tabBarIcon: ({focused, color, size}) => {
        tabBarIcon: () => {
          let Icon = null;

          if (route.name === 'Home') {
            Icon = HomeIcon;
          } else if (route.name === 'Basket') {
            Icon = BasketIcon;
          } else if (route.name === 'Profile') {
            Icon = PersonIcon;
          } else if (route.name === 'Orders') {
            Icon = ReceiptIcon;
          }

          const FinalIcon = (
            <View style={{height: 30, width: 30}}>
              <Icon />
            </View>
          );

          return FinalIcon;
        },

        // tabBarIcon: ({focused, color, size}) => {
        //   let iconName;
        //   if (route.name === 'Home') {
        //     iconName = focused ? 'home' : 'home';
        //   } else if (route.name === 'Favorite') {
        //     iconName = focused ? 'heart' : 'heart-o';
        //   } else if (route.name === 'Medium') {
        //     iconName = focused ? 'heart' : 'heart-o';
        //   } else if (route.name === 'Hard') {
        //     iconName = focused ? 'cog' : 'cog';
        //   }
        //   return <Icon name={iconName} size={23} color={color} />;
        // },
        tabBarShowLabel: false,
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
