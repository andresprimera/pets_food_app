import React from 'react';

import {Navbar} from '@app/components/organisms/Navbar';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CheckoutStackParamList} from './CheckoutRouteTypes';

import {CheckoutHeader} from './CheckoutHeader';
import {CheckoutStepTracker} from './CheckoutStepTracker';
import {Divider} from '@app/components/atoms/Divider';
import {CheckoutStackNavigation} from './CheckoutStackNavigation';
import {Button} from '@app/components/atoms/Button';
import {metrics} from '@app/theme';

type checkoutProps = StackNavigationProp<CheckoutStackParamList, 'Step2'>;

function handleNavigate(navigation: checkoutProps) {
  navigation.navigate('Step2');
}

export const Checkout = () => {
  const navigation = useNavigation<checkoutProps>();
  return (
    <>
      <Navbar />
      <CheckoutHeader />
      <CheckoutStepTracker />
      <Divider />
      <CheckoutStackNavigation />
      <Button
        propStyle={{
          paddingBottom: metrics.addFooter,
          marginHorizontal: metrics.mainHorizontalPadding,
        }}
        onPress={() => handleNavigate(navigation)}
        text="Siguiente"
      />
    </>
  );
};
