import {ProductCard} from '@app/components/organisms/ProductCard';
import React from 'react';

import {ScrollView} from 'react-native';

export const CardsScroll = () => {
  return (
    <ScrollView>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ScrollView>
  );
};
