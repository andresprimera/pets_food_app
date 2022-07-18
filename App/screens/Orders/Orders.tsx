import React from 'react';

import {View} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';

import {styles} from './styles';

import {TextH5} from '@app/components/atoms/TextH5';
import {Navbar} from '@app/components/organisms/Navbar';
import {OrderCard} from '@app/components/molecules/OrdersCard';

export const Orders = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.innerContainer}>
        <TextH5 style={styles.title}>Historial de ordenes</TextH5>
        <ScrollView>
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </ScrollView>
      </View>
    </View>
  );
};
