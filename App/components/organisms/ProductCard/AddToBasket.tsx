import React from 'react';

import {View} from 'react-native';

import {ButtonSmall} from '@app/components/atoms/ButtonSmall';
import {BasketIcon} from '@app/assets/svgs';
import {styles} from './style';

export const AddToBasket = () => {
  return (
    <View style={styles.basketIcon}>
      <ButtonSmall>
        <BasketIcon />
      </ButtonSmall>
    </View>
  );
};
