import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';

import {TextMedium} from '@app/components/atoms/TextMedium';
import {FlatList} from 'react-native-gesture-handler';
import {Item} from './Item';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Product 1',
    qty: 2,
    price: 4.6,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Product 2',
    qty: 3,
    price: 24.6,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Product 3',
    qty: 4,
    price: 14.6,
  },
];

export const ProductSummary = () => {
  return (
    <View style={styles.psContainer}>
      <View style={styles.inner}>
        <TextMedium style={styles.title}>Resumen de compra</TextMedium>
        <FlatList
          data={DATA}
          renderItem={Item}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
