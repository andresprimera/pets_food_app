import React from 'react';

import {View, Image} from 'react-native';

import {styles} from './style';

export const ProductImage = () => {
  return (
    <View style={styles.imgContainer}>
      <Image
        style={styles.image}
        source={require('@app/assets/imgs/product1.jpg')}
      />
    </View>
  );
};
