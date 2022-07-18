import React from 'react';

import {View, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {MainModalScreensProps} from '@app/config/router/RouteTypes';

import {TextMedium} from '@app/components/atoms/TextMedium';
import {ClickableText} from '@app/components/atoms/ClickableText';

import {styles} from './styles';

export const RecurrentSection = () => {
  const navigation = useNavigation<MainModalScreensProps>();

  return (
    <View>
      <View style={styles.recurrentTop}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.img}
            source={require('@app/assets/imgs/logo.jpg')}
          />
        </View>

        <View style={styles.recurrentTopText}>
          <TextMedium style={styles.text}>
            En esta sección encontrarás el detalle de tus pedidos recurrentes.
          </TextMedium>

          <TextMedium style={styles.textBold}>
            Al final de su compra podrá configurarla como recurrente
          </TextMedium>
        </View>
      </View>
      <View style={styles.recurrentBottom}>
        <ClickableText
          onClick={() => {
            navigation.navigate('RecurrentOrder');
          }}>
          ¿Qué es un pedido recurrente?
        </ClickableText>
      </View>
    </View>
  );
};
