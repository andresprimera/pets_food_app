import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {styles} from './style';
import {TextH4} from '@app/components/atoms/TextH4';
import MinusIcon from '@app/assets/svgs/minusIcon';
import PlusIconOld from '@app/assets/svgs/plusIconOld';

export const Buttons = () => {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        onPress={() => {
          console.log('delete the item');
        }}>
        <MinusIcon />
      </TouchableOpacity>

      <TextH4 style={styles.qty}>2</TextH4>
      <TouchableOpacity
        onPress={() => {
          console.log('add an item');
        }}>
        <PlusIconOld />
      </TouchableOpacity>
    </View>
  );
};
