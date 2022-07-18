import React from 'react';
import {View} from 'react-native';
import {TextMedium} from '@app/components/atoms/TextMedium';
import {styles} from './styles';
import {TextRegular} from '@app/components/atoms/TextRegular';
import {AddressCard} from '@app/components/molecules/AddressCard/AddressCard';

const sumary = [
  {title: 'Fecha de entrega', value: '30/07/2022'},
  {title: 'Método de entrega', value: 'Retiro en tienda'},
];

const address = {
  title: 'Casa',
  address: 'San Antonio a Santa Isabel',
  building: 'Casa',
  number: '49',
  neighborhood: 'La Pastora',
  city: 'Caracas',
  locationAid: 'Dos cuadras más arriba del mercado',
  isSelected: true,
};

export const FinalSection = () => {
  return (
    <View style={[styles.inner, styles.fsContainer]}>
      {sumary.map(el => (
        <View style={styles.textLine}>
          <TextMedium style={styles.title}>{el.title}</TextMedium>
          <TextRegular>{el.value}</TextRegular>
        </View>
      ))}
      <TextMedium style={styles.title}>Dirección de entrega</TextMedium>
      <AddressCard {...address} />
    </View>
  );
};
