import React from 'react';

import {View} from 'react-native';
import {ProductSummary} from './ProductSummary';
import {styles} from './styles';
import {DeliveryPrice} from './DeliveryPrice';
import {Divider} from '@app/components/atoms/Divider';
import {FinalSection} from './FinalSection';

export const Step3 = () => {
  return (
    <View style={styles.container}>
      <ProductSummary />
      <Divider />
      <DeliveryPrice />
      <FinalSection />
    </View>
  );
};
