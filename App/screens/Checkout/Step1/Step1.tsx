import React from 'react';

import {View} from 'react-native';
import {AddressSelection} from './AddressSelection';

import {ShipmentInfo} from './ShipmentInfo';
import {styles} from './styles';

export const Step1 = () => {
  return (
    <View style={styles.container}>
      <ShipmentInfo />
      <AddressSelection />
    </View>
  );
};
