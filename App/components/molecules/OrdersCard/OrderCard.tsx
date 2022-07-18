import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';

import {Card} from '@app/components/atoms/Card';
import {TextSmall} from '@app/components/atoms/TextSmall';
import {ClickableText} from '@app/components/atoms/ClickableText';

interface Props {
  openConfirmationModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OrderCard = ({openConfirmationModal}: Props) => {
  return (
    <Card>
      <View style={styles.content}>
        <View style={styles.lineStretched}>
          <TextSmall style={styles.header}>Orden N° 1234334</TextSmall>
          <TextSmall style={styles.header}>17/07/2022</TextSmall>
        </View>
        <View style={styles.mainContent}>
          <View style={styles.labels}>
            <TextSmall style={styles.line}>Fecha de entrega: </TextSmall>
            <TextSmall style={styles.line}>Método de pago: </TextSmall>
            <TextSmall style={styles.line}>Valor de compra: </TextSmall>
          </View>
          <View style={styles.values}>
            <TextSmall style={styles.line}>10/05/2022</TextSmall>
            <TextSmall style={styles.line}>Transferencia Bancaria</TextSmall>
            <TextSmall style={styles.line}>$10,5</TextSmall>
          </View>
        </View>
        <View style={styles.lineStretched}>
          <ClickableText
            onClick={() => {
              if (openConfirmationModal) {
                openConfirmationModal(true);
              }
            }}>
            Detalles
          </ClickableText>
          <ClickableText onClick={() => console.log('go to payment report')}>
            Reportar el pago
          </ClickableText>
        </View>
      </View>
    </Card>
  );
};
