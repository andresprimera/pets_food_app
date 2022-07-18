import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';

import {CustomImage} from '@app/components/atoms/CustomImage';
import {TextH4} from '@app/components/atoms/TextH4';

export const UserInfo = () => {
  return (
    <View style={styles.userInfo}>
      <CustomImage
        imageUrl={require('@app/assets/imgs/avatar.png')}
        isRound={true}
        style={styles.image}
      />
      <TextH4 style={styles.name}>Andrés Ricardo Primera Curiel</TextH4>
    </View>
  );
};
