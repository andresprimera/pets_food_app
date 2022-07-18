import React from 'react';
import {View} from 'react-native';

import {InputText} from '@app/components/atoms/InputText';

import {styles} from './styles';

export const FirstSection = () => {
  return (
    <View style={styles.firstSection}>
      <InputText label="Correo electrónico" />
      <InputText label="Whatsapp de contacto" />
    </View>
  );
};
