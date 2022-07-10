import React from 'react';

import {Navbar} from '@app/components/organisms/Navbar';

import {CheckoutHeader} from './CheckoutHeader';
import {CheckoutStepTracker} from './CheckoutStepTracker';
import {Divider} from '@app/components/atoms/Divider';
import {CheckoutStackNavigation} from './CheckoutStackNavigation';

export const Checkout = () => {
  return (
    <>
      <Navbar />
      <CheckoutHeader />
      <CheckoutStepTracker />
      <Divider />
      <CheckoutStackNavigation />
    </>
  );
};
