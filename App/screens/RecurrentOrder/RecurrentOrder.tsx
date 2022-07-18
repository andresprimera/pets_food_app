import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';

import {TextH5} from '@app/components/atoms/TextH5';
import {Divider} from '@app/components/atoms/Divider';
import {TextSmall} from '@app/components/atoms/TextSmall';

const steps = [
  'Agregar los productos y cantidades que desee en su cesta de compras.',
  'Proceder al checkout.',
  'Chequear la opción “Crear pedido recurrente”.',
  'Indicar la frecuencia con la que desee que se le entregue el pedido.',
  'Finalizar con el proceso de compra.',
];

export const RecurrentOrder = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TextH5 style={styles.title}>¿Qué es un pedido recurrente?</TextH5>
      </View>
      <Divider />
      <View style={styles.content}>
        <TextSmall style={styles.text}>
          Con PETS food podrás programar tu pedido para que sea entregado en su
          domicilio con la frecuencia que más le convenga. Cerca a la fecha de
          entrega, nuestro equipo se pondrá en contacto con usted para el
          recaudo del pago y el despacho
        </TextSmall>
        <TextSmall style={styles.boldText}>
          Para crear un pedido recurrente debe:
        </TextSmall>

        <View>
          {steps.map((step, i) => {
            const index = i + 1;
            return (
              <View key={'recurrentSteps-' + i} style={styles.stepContainer}>
                <TextSmall style={styles.number}>{index + '.- '}</TextSmall>
                <TextSmall style={styles.stepDescription}>{step}</TextSmall>
              </View>
            );
          })}
        </View>

        <TextSmall style={styles.text}>
          Luego del proceso anterior, su compra recurrente aparecerá en la
          pantalla inicial cada vez que entre a PETS food.
        </TextSmall>
      </View>
      <View style={styles.spacer} />
    </View>
  );
};
