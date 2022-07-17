import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';

import {InputText} from '@app/components/atoms/InputText';

export const NameAndPassword = () => {
  return (
    <View style={styles.userData}>
      <InputText label="Nombre" placeholder="Ej. Juan Carlos" />
      <InputText label="Apellido" placeholder="Ej. Moreno" />
    </View>
  );
};
