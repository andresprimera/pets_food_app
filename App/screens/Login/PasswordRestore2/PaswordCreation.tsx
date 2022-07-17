import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';

import {InputText} from '@app/components/atoms/InputText';
import {TextMedium} from '@app/components/atoms/TextMedium';

export const PaswordCreation = () => {
  return (
    <View style={styles.newPassword}>
      <TextMedium style={styles.centeredText}>
        Favor ingresa tu nueva contraseña
      </TextMedium>
      <InputText label="Nombre" placeholder="Ej. Juan Carlos" />
      <InputText label="Apellido" placeholder="Ej. Moreno" />
    </View>
  );
};
