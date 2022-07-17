import React from 'react';

import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenProps} from '../RoutesTypes';

import {styles} from './styles';

import {TextSmall} from '@app/components/atoms/TextSmall';
import {InputText} from '@app/components/atoms/InputText';
import {ClickableText} from '@app/components/atoms/ClickableText';
import {Button} from '@app/components/atoms/Button';

export const LowerSection = () => {
  const navigation = useNavigation<LoginScreenProps>();
  return (
    <View style={styles.lowerSection}>
      <InputText label={'Password'} placeholder={'Ingresa tu contraseña'} />

      <View>
        <TextSmall style={styles.forgotPassword}>
          Si olvidaste tu contraseña
        </TextSmall>
        <View style={styles.clickHere}>
          <TextSmall> haz click </TextSmall>
          <ClickableText
            onClick={() => navigation.navigate('PasswordRestore1')}>
            aquí
          </ClickableText>
        </View>
      </View>

      <Button
        text={'Ingresar'}
        onPress={() => {
          navigation.navigate('UserCreation');
        }}
      />
    </View>
  );
};
