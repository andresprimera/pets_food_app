import React from 'react';

import {View} from 'react-native';

import {PaymentInfo} from './PaymentInfo';
import {styles} from './styles';

export const Step2 = () => {
  return (
    <View style={styles.container}>
      <PaymentInfo />
    </View>
  );
};
