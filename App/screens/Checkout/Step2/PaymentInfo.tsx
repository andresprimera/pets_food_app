import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';

import {Checkbox} from '@app/components/atoms/Checkbox';
import {Divider} from '@app/components/atoms/Divider';
import {TextMedium} from '@app/components/atoms/TextMedium';

export const PaymentInfo = () => {
  return (
    <View style={styles.paymentContainer}>
      <View style={styles.inner}>
        <TextMedium style={styles.title}>Método de pago</TextMedium>
        <Checkbox text={'Pago móvil'} />
        <Checkbox text={'Transferencia bancaria'} />
        <Checkbox text={'Efectivo'} />
      </View>
      <Divider />
    </View>
  );
};
