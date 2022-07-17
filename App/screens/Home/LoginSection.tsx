import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {MainModalScreensProps} from '@app/config/router/RouteTypes';

import {ClickableText} from '@app/components/atoms/ClickableText';
import {TextMedium} from '@app/components/atoms/TextMedium';

import {View} from 'react-native';

import {styles} from './styles';

export const LoginSection = () => {
  const navigation = useNavigation<MainModalScreensProps>();
  return (
    <View style={styles.loginSectionContainer}>
      <TextMedium> tus pedidos recurrentes debes</TextMedium>
      <ClickableText
        style={styles.clickableLink}
        onClick={() => {
          console.log('iniciar sesion');
          navigation.navigate('Login');
        }}>
        Iniciar sesión
      </ClickableText>
    </View>
  );
};
