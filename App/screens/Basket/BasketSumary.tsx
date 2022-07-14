import React from 'react';

import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@app/config/router/RouteTypes';

import {styles} from './styles';
import {TextMedium} from '@app/components/atoms/TextMedium';
import {Button} from '@app/components/atoms/Button';
import {Buttons} from '@app/components/organisms/ListItem/Buttons';
import {Checkbox} from '@app/components/atoms/Checkbox';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Checkout'>;

export const BasketSumary = () => {
  const navigation = useNavigation<authScreenProp>();
  return (
    <View style={styles.inner}>
      <Checkbox text={'Crear pedido recurrente'} />
      <View style={styles.recurrenceSection}>
        <TextMedium style={{flex: 2}}>
          ¿Cada cuantos días quieres tus productos?
        </TextMedium>
        <Buttons />
      </View>

      <Button
        onPress={() => navigation.navigate('Checkout')}
        text={'Ir a pantalla de confirmación'}
      />
    </View>
  );
};
