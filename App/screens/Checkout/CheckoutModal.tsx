import React from 'react';

import {Modal, View, Image} from 'react-native';

import {styles} from './style';

import {TextSmall} from '@app/components/atoms/TextSmall';
import {TextLarge} from '@app/components/atoms/TextLarge';
import {ClickableText} from '@app/components/atoms/ClickableText';
import {Divider} from '@app/components/atoms/Divider';

export const CheckoutModal = ({
  showModal,
  handleSetShowModal,
}: {
  showModal: boolean;
  handleSetShowModal: any;
}) => {
  return (
    <Modal visible={showModal} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextSmall style={styles.orderNumber}>Order N° 1232345</TextSmall>
          <View style={styles.imgContainer}>
            <Image
              style={styles.image}
              source={require('@app/assets/imgs/celebrationDog.png')}
            />
          </View>
          <TextLarge style={styles.text}>
            {'Gracias por comprar en PETS food'}
          </TextLarge>
          <Divider />
          <TextSmall style={styles.smallText}>
            {'Ahora, ¿Cuándo quieres reportar el pago?'}
          </TextSmall>
          <View style={styles.actionButtonsContainer}>
            <ClickableText
              style={styles.action}
              onClick={() => {
                console.log('Reportar el pago ahora');
                handleSetShowModal(false);
              }}>
              Reportar el pago ahora
            </ClickableText>
            <ClickableText
              style={styles.action}
              onClick={() => {
                console.log('Reportar el pago ahora');
                handleSetShowModal(false);
              }}>
              Reportar luego
            </ClickableText>
          </View>

          <TextSmall style={styles.smallText}>
            Recuerda que el pedido no será despachado hasta que el pago sea
            confirmado
          </TextSmall>
        </View>
      </View>
    </Modal>
  );
};
