import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';

import {Button} from '@app/components/atoms/Button';

export const FinishRegistry = () => {
  return (
    <View style={styles.button}>
      <Button onPress={() => console.log('Andres')} text="Finalizar registro" />
    </View>
  );
};
