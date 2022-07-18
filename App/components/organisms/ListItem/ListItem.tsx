import React from 'react';

import {View} from 'react-native';

import {ProductImage} from '@app/components/atoms/ProductImage';
import {styles} from './style';
import {ProductDescription} from '@app/components/molecules/ProductDescription';
import {TextLarge} from '@app/components/atoms/TextLarge';
import {Buttons} from './Buttons';

export const ListItem = () => {
  return (
    <View style={styles.container}>
      <ProductImage />
      <View style={styles.description}>
        <ProductDescription />
        <TextLarge style={styles.price}>{'$2.0'}</TextLarge>
      </View>
      <View style={styles.buttons}>
        <Buttons />
      </View>
      <View style={styles.spacer} />
    </View>
  );
};
