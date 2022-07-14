import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';
import {Item} from './Item';
import {TextRegular} from '@app/components/atoms/TextRegular';

import {Divider} from '@app/components/atoms/Divider';

export const DeliveryPrice = () => {
  const item = {
    title: 'Domicilio a La Candelaria',
    price: 7.5,
    qty: 1,
  };

  return (
    <View style={styles.dvContainer}>
      <View style={[styles.inner, styles.subtotal]}>
        <TextRegular style={styles.subtotalText}>
          {'Subtotal      $10.5'}
        </TextRegular>
        <Item item={item} />
      </View>
      <Divider />
      <View style={styles.inner}>
        <TextRegular style={styles.subtotalText}>
          {'Total      $18.5'}
        </TextRegular>
      </View>
    </View>
  );
};
