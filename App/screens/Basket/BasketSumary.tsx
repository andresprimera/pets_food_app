import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';
import {TextH5} from '@app/components/atoms/TextH5';
import {TextMedium} from '@app/components/atoms/TextMedium';
import {TextRegular} from '@app/components/atoms/TextRegular';
import {Button} from '@app/components/atoms/Button';
import {Buttons} from '@app/components/organisms/ListItem/Buttons';
import {Checkbox} from '@app/components/atoms/Checkbox';

export const BasketSumary = () => {
  return (
    <View>
      <View style={styles.subtotal}>
        <TextRegular>Subtotal</TextRegular>
        <TextH5 style={styles.price}>$10,2</TextH5>
      </View>

      <Checkbox text={'Crear pedido recurrente'} />
      <View style={styles.recurrenceSection}>
        <TextMedium style={{flex: 2}}>
          ¿Cada cuantos días quieres tus productos?
        </TextMedium>
        <Buttons />
      </View>

      <Button text={'Ir a pantalla de confirmación'} />
    </View>
  );
};
