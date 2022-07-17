import React from 'react';

import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenProps} from '../RoutesTypes';

import {styles} from './styles';

import {Button} from '@app/components/atoms/Button';

export const Confirm = () => {
  const navigation = useNavigation<LoginScreenProps>();
  return (
    <View style={styles.button}>
      <Button
        onPress={() => navigation.navigate('NumberReq')}
        text="Confirmar contraseña"
      />
    </View>
  );
};
