import React from 'react';
import {View} from 'react-native';

import {Card} from '@app/components/atoms/Card';
import {styles} from './styles';
import {TextSmall} from '@app/components/atoms/TextSmall';
import {TextTiny} from '@app/components/atoms/TextTiny';
import {CheckIcon} from '@app/assets/svgs';
import {colors} from '@app/theme';

interface Props {
  title: string;
  address: string;
  building?: string;
  number: string;
  neighborhood: string;
  city: string;
  locationAid?: string;
  isSelected?: boolean;
}

export const AddressCard = ({
  title = 'Tipo de dirección',
  address = 'San Antonio a Santa Isabel',
  building = '',
  number = '49',
  neighborhood = 'La Pastora',
  city = 'Caracas',
  locationAid = '',
  isSelected = false,
}: Props) => {
  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.content}>
          <TextSmall style={styles.title}>{title}</TextSmall>
          <TextSmall style={styles.line}>{address}</TextSmall>
          <TextSmall style={styles.line}>
            {'Edf/Casa: ' + building + ' - Apto/N° ' + number}
          </TextSmall>
          <TextSmall style={styles.line}>
            {neighborhood + ' - ' + city}
          </TextSmall>
          <TextTiny style={styles.line}>{locationAid}</TextTiny>
        </View>
        {isSelected && (
          <View style={styles.icon}>
            <CheckIcon color={colors.secondary} />
          </View>
        )}
      </View>
    </Card>
  );
};
