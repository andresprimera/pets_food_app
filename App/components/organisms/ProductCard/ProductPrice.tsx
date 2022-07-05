import React from 'react';

import {View} from 'react-native';

import {styles} from './style';
import {TextRegular} from '@app/components/atoms/TextRegular';

export const ProductPrice = () => {
  return (
    <View style={styles.productPrice}>
      <TextRegular>Precio:</TextRegular>
      <TextRegular>$2.0</TextRegular>
    </View>
  );
};
