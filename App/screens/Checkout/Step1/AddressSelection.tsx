import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';

import {TextMedium} from '@app/components/atoms/TextMedium';
import {TextSmall} from '@app/components/atoms/TextSmall';
import {ClickableText} from '@app/components/atoms/ClickableText';
import {PlusIcon} from '@app/assets/svgs';

export const AddressSelection = () => {
  return (
    <View style={styles.addressContainer}>
      <View style={styles.inner}>
        <TextMedium style={styles.title}>Dirección de entrega</TextMedium>
        <TextSmall style={styles.centeredSmallText}>
          Actualmente no tienes una dirección de envío registrada
        </TextSmall>
        <View style={styles.addAddress}>
          <ClickableText Icon={PlusIcon} onClick={() => console.log('Andres')}>
            Agregar nueva dirección
          </ClickableText>
        </View>
      </View>
    </View>
  );
};
