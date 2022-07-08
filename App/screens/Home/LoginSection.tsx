import React from 'react';

import {ClickableText} from '@app/components/atoms/ClickableText';
import {TextRegular} from '@app/components/atoms/TextRegular';

import {View} from 'react-native';

import {styles} from './styles';

export const LoginSection = () => {
  return (
    <View style={styles.loginSectionContainer}>
      <TextRegular>Para ver tus pedidos recurrentes debes</TextRegular>
      <ClickableText
        onClick={() => {
          console.log('iniciar sesion');
        }}>
        Iniciar sesión
      </ClickableText>
    </View>
  );
};
