import React from 'react';

import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenProps} from '../RoutesTypes';

import {styles} from './styles';

import {InputText} from '@app/components/atoms/InputText';
import {Button} from '@app/components/atoms/Button';

export const LowerSection = () => {
  const navigation = useNavigation<LoginScreenProps>();
  return (
    <View style={styles.lowerSection}>
      <InputText label={'Ingresa tu número de whatsapp'} />
      <Button
        text={'Validar'}
        onPress={() => {
          navigation.navigate('PasswordReq');
        }}
      />
    </View>
  );
};
