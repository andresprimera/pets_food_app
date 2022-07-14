import React from 'react';

import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CheckoutStackParamList} from '../CheckoutRouteTypes';

import {PaymentInfo} from './PaymentInfo';
import {styles} from './styles';
import {Button} from '@app/components/atoms/Button';

type checkoutProps = StackNavigationProp<CheckoutStackParamList, 'Step3'>;

function handleNavigate(navigation: checkoutProps) {
  navigation.navigate('Step3');
}

export const Step2 = () => {
  const navigation = useNavigation<checkoutProps>();
  return (
    <View style={styles.container}>
      <PaymentInfo />
      <Button
        propStyle={styles.button}
        text={'Siguiente'}
        onPress={() => handleNavigate(navigation)}
      />
    </View>
  );
};
