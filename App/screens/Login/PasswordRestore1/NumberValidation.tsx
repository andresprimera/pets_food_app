import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';

import {TextMedium} from '@app/components/atoms/TextMedium';
import {TextInput} from 'react-native-gesture-handler';

const NumberInput = () => {
  return (
    <View style={styles.numberContainer}>
      <TextInput
        keyboardType="number-pad"
        style={styles.numberInput}
        placeholder="-"
      />
    </View>
  );
};

export const NumberValidation = () => {
  return (
    <View style={styles.numberValidation}>
      <TextMedium style={styles.centeredText}>
        Por favor ingresa el código que enviamos a tu número de WhatsApp.
      </TextMedium>
      <View style={styles.numberSection}>
        {[0, 1, 2, 3, 4].map(i => {
          return <NumberInput key={i} />;
        })}
      </View>
    </View>
  );
};
