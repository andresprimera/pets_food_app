import React from 'react';

import {Navbar} from '@app/components/organisms/Navbar';
import {ButtonNavigation} from '@app/config/router/ButtonNavigation';

import {View} from 'react-native';

import {CheckoutHeader} from './CheckoutHeader';
import {CheckoutStepTracker} from './CheckoutStepTracker';
import {Divider} from '@app/components/atoms/Divider';

export const Checkout = () => {
  return (
    <View>
      <Navbar />
      <CheckoutHeader />
      <CheckoutStepTracker />
      <Divider />
      <ButtonNavigation />
    </View>
  );
};
