import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';

import {TextMedium} from '@app/components/atoms/TextMedium';
import {TextSmall} from '@app/components/atoms/TextSmall';
import {ClickableText} from '@app/components/atoms/ClickableText';

export const AddressSelection = () => {
  return (
    <View style={styles.shipmentContainer}>
      <View style={styles.inner}>
        <TextMedium style={styles.title}>Dirección de entrega</TextMedium>
        <TextSmall style={styles.centeredSmallText}>
          Actualmente no tienes una dirección de envío registrada
        </TextSmall>
        <ClickableText onClick={() => console.log('Andres')}>
          Agregar nueva dirección
        </ClickableText>
      </View>
    </View>
  );
};
