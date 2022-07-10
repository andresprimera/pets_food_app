import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';

import {Checkbox} from '@app/components/atoms/Checkbox';
import {Divider} from '@app/components/atoms/Divider';
import {TextMedium} from '@app/components/atoms/TextMedium';

export const ShipmentInfo = () => {
  return (
    <View style={styles.shipmentContainer}>
      <Divider />
      <View style={styles.inner}>
        <TextMedium style={styles.title}>Método de envío</TextMedium>
        <Checkbox text={'Retiro en tienda'} />
        <Checkbox text={'A domicilio'} />
      </View>
      <Divider />
    </View>
  );
};
