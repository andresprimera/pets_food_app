import React from 'react';

import {View, Image} from 'react-native';

import {TextMedium} from '@app/components/atoms/TextMedium';
import {ClickableText} from '@app/components/atoms/ClickableText';

import {styles} from './styles';

export const RecurrentSection = () => {
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
            console.log('andres es lo máximo');
          }}>
          ¿Qué es un pedido recurrente?
        </ClickableText>
      </View>
    </View>
  );
};
