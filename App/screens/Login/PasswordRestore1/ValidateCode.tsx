import React from 'react';

import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenProps} from '../RoutesTypes';

import {styles} from './styles';

import {Button} from '@app/components/atoms/Button';

export const ValidateCode = () => {
  const navigation = useNavigation<LoginScreenProps>();
  return (
    <View style={styles.button}>
      <Button
        onPress={() => navigation.navigate('PasswordRestore2')}
        text="Validar código"
      />
    </View>
  );
};
