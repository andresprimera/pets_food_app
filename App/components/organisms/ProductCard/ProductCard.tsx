import React from 'react';

import {View} from 'react-native';

import {Card} from '@app/components/atoms/Card';
import {ProductInfo} from './ProductInfo';
import {styles} from './style';
import {ProductImage} from './ProductImage';
import {AddToBasket} from './AddToBasket';

export const ProductCard = () => {
  return (
    <Card>
      <View style={styles.container}>
        <ProductImage />
        <ProductInfo />
        <AddToBasket />
      </View>
    </Card>
  );
};
