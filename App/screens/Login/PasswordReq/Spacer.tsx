import React from 'react';

import {View, Image} from 'react-native';

import {styles} from './styles';

export const Spacer = () => {
  return (
    <View style={styles.spacer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require('@app/assets/imgs/logo.png')}
        />
      </View>
    </View>
  );
};
