import {fonts, colors} from '@app/theme';
import React from 'react';

import {View} from 'react-native';
import {styles} from './styles';
import {TextH5} from '@app/components/atoms/TextH5';
import {PawIcon} from '@app/assets/svgs';

export const Navbar = () => {
  return (
    <View style={styles.container}>
      <TextH5 color={colors.light} fontFamily={fonts.family.primary.light}>
        Hola Andrés!
      </TextH5>

      <PawIcon />
    </View>
  );
};
