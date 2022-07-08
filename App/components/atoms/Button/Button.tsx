import React from 'react';

import {TouchableOpacity} from 'react-native';

import {colors, fonts} from '@app/theme';

import {styles} from './style';
import {TextRegular} from '../TextRegular';

export const Button = ({text}: {text: string}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <TextRegular
        style={{color: colors.light, fontFamily: fonts.family.secondary.light}}>
        {text}
      </TextRegular>
    </TouchableOpacity>
  );
};
