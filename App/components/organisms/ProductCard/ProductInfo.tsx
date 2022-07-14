import React from 'react';

import {View} from 'react-native';

import {ProductDescription} from '@app/components/molecules/ProductDescription';

import {styles} from './style';
import {Divider} from '@app/components/atoms/Divider';
import {ProductPrice} from './ProductPrice';

export const ProductInfo = () => {
  return (
    <View style={styles.productInfoContainer}>
      <ProductDescription />
      <Divider />
      <ProductPrice />
    </View>
  );
};
