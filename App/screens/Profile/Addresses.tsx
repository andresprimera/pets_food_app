import React from 'react';

import {View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainModalScreensProps} from '@app/config/router/RouteTypes';

import {styles} from './styles';

import {TextMedium} from '@app/components/atoms/TextMedium';
import {TextSmall} from '@app/components/atoms/TextSmall';
import {AddressCard} from '@app/components/molecules/AddressCard/AddressCard';
import {ClickableText} from '@app/components/atoms/ClickableText';
import {PlusIcon} from '@app/assets/svgs';

const addresses = [
  {
    title: 'Casa',
    address: 'San Antonio a Santa Isabel',
    building: 'Casa',
    number: '49',
    neighborhood: 'La Pastora',
    city: 'Caracas',
    locationAid: 'Dos cuadras más arriba del mercado',
    isSelected: true,
  },
];
export const Addresses = () => {
  const navigation = useNavigation<MainModalScreensProps>();

  return (
    <View style={styles.addresses}>
      <TextMedium style={styles.label}>{'Mis direcciones'}</TextMedium>
      <ScrollView>
        {addresses.length === 0 ? (
          <TextSmall style={styles.noAddressMessage}>
            Actualmente no tienes una dirección de envío registrada
          </TextSmall>
        ) : (
          addresses.map((address, i) => {
            return <AddressCard key={'addresses-' + i} {...address} />;
          })
        )}
        <ClickableText
          style={styles.clickableText}
          Icon={PlusIcon}
          onClick={() => navigation.navigate('AddAddress')}>
          Agregar nueva dirección
        </ClickableText>
        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
};
