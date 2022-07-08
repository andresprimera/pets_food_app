import React from 'react';

import {View} from 'react-native';

import {TextRegular} from '@app/components/atoms/TextRegular';
import {TextSmall} from '@app/components/atoms/TextSmall';
import {colors} from '@app/theme';
import {styles} from './styles';
export const ProductDescription = () => {
  return (
    <View style={styles.container}>
      <TextRegular>Producto 1</TextRegular>
      <TextSmall style={{color: colors.lightGray}}>500gr</TextSmall>
    </View>
  );
};
