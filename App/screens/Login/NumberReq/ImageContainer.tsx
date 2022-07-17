import React from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';

export const ImageContainer = () => {
  return (
    <View style={styles.imgContainer}>
      <Image
        style={styles.image}
        source={require('@app/assets/imgs/sabueso.jpg')}
      />
    </View>
  );
};
