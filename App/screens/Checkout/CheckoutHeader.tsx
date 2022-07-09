import React from 'react';

import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './style';
import {colors} from '@app/theme';
import BackIcon from '@app/assets/svgs/BackIcon';
import {TextLarge} from '@app/components/atoms/TextLarge';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const CheckoutHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerTop}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.icon}>
        <BackIcon color={colors.primary} />
      </TouchableOpacity>
      <TextLarge style={styles.title}>Confirmación de compra</TextLarge>
    </View>
  );
};
