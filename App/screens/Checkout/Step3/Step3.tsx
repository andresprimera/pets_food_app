import React from 'react';

import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CheckoutStackParamList} from '../CheckoutRouteTypes';

import {ProductSummary} from './ProductSummary';
import {styles} from './styles';
import {Button} from '@app/components/atoms/Button';
import {DeliveryPrice} from './DeliveryPrice';
import {Divider} from '@app/components/atoms/Divider';
import {FinalSection} from './FinalSection';

type checkoutProps = StackNavigationProp<CheckoutStackParamList, 'Step3'>;

function handleNavigate(navigation: checkoutProps) {
  navigation.navigate('Step3');
}

export const Step3 = () => {
  const navigation = useNavigation<checkoutProps>();
  return (
    <View style={styles.container}>
      <ProductSummary />
      <Divider />
      <DeliveryPrice />
      <FinalSection />
      <Button
        propStyle={styles.button}
        text={'Finalizar compra'}
        onPress={() => handleNavigate(navigation)}
      />
    </View>
  );
};
