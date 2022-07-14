import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';
import {InputText} from '@app/components/atoms/InputText';
import {InputDatePicker} from '@app/components/atoms/InputDatePicker';

export const DateSelection = () => {
  return (
    <View style={styles.shipmentContainer}>
      <View style={styles.inner}>
        <InputText />
        <InputDatePicker />
      </View>
    </View>
  );
};
