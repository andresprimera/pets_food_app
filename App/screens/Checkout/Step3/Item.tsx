import React from 'react';
import {View} from 'react-native';

import {TextSmall} from '@app/components/atoms/TextSmall';

import {styles} from './styles';

interface Props {
  title: string;
  qty: number;
  price: number;
}

export const Item = ({item}: {item: Props}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemDescription}>
        <TextSmall>{item.qty + '.- '}</TextSmall>
        <TextSmall>{item.title}</TextSmall>
      </View>

      <TextSmall>{'$' + item.price}</TextSmall>
    </View>
  );
};
