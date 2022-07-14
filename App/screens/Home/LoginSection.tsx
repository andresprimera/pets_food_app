import React from 'react';

import {ClickableText} from '@app/components/atoms/ClickableText';
import {TextMedium} from '@app/components/atoms/TextMedium';

import {View} from 'react-native';

import {styles} from './styles';

export const LoginSection = () => {
  return (
    <View style={styles.loginSectionContainer}>
      <TextMedium> tus pedidos recurrentes debes</TextMedium>
      <ClickableText
        style={styles.clickableLink}
        onClick={() => {
          console.log('iniciar sesion');
        }}>
        Iniciar sesión
      </ClickableText>
    </View>
  );
};
