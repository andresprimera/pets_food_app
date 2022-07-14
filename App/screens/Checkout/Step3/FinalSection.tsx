import React from 'react';
import {View} from 'react-native';

import {Card} from '@app/components/atoms/Card';
import {TextMedium} from '@app/components/atoms/TextMedium';
import {styles} from './styles';
import {TextRegular} from '@app/components/atoms/TextRegular';
import {TextSmall} from '@app/components/atoms/TextSmall';
import {TextTiny} from '@app/components/atoms/TextTiny';

const sumary = [
  {title: 'Fecha de entrega', value: '30/07/2022'},
  {title: 'Método de entrega', value: 'Retiro en tienda'},
];

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
      <Card>
        <View style={styles.addressContainer}>
          <TextMedium style={styles.cardTitle}>Casa</TextMedium>
          <TextSmall style={styles.addressText}>
            {'San antonio a Santa Isabel #49'}
          </TextSmall>
          <TextSmall style={styles.addressText}>La Pastora - Caracas</TextSmall>
          <TextTiny style={styles.addressText}>Al lado del farmatodo</TextTiny>
        </View>
      </Card>
    </View>
  );
};
