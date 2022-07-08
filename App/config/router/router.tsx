import React from 'react';

import {ButtonNavigation} from './ButtonNavigation';
import {NavigationContainer} from '@react-navigation/native';

export const Router = () => {
  return (
    <NavigationContainer>
      <ButtonNavigation />
    </NavigationContainer>
  );
};
