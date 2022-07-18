import React, {useState} from 'react';

import {View} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';

import {styles} from './styles';

import {TextH5} from '@app/components/atoms/TextH5';
import {Navbar} from '@app/components/organisms/Navbar';
import {OrderCard} from '@app/components/molecules/OrdersCard';
import {ConfirmationModal} from '@app/components/molecules/ConfirmationModal';

export const Orders = () => {
  const [opened, setOpened] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <ConfirmationModal
        opened={opened}
        handleCloseModal={setOpened}
        message="Confirmamos el reporte de pago"
        pictureUrl={require('@app/assets/imgs/payingDog.png')}
        additionalInfo="En breve serás contactado para acordar los detalles del despacho."
      />
      <Navbar />
      <View style={styles.innerContainer}>
        <TextH5 style={styles.title}>Historial de ordenes</TextH5>
        <ScrollView>
          <OrderCard openConfirmationModal={setOpened} />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </ScrollView>
      </View>
    </View>
  );
};
