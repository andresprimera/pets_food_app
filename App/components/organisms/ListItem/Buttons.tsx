import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {styles} from './style';
import {TextLarge} from '@app/components/atoms/TextLarge';
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

      <TextLarge style={styles.qty}>4</TextLarge>
      <TouchableOpacity
        onPress={() => {
          console.log('add an item');
        }}>
        <PlusIconOld />
      </TouchableOpacity>
    </View>
  );
};
