import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {colors, fonts} from '@app/theme';
import {styles} from './style';

interface Props {
  text: string;
}

export const Checkbox = ({text}: Props) => {
  return (
    <BouncyCheckbox
      size={25}
      fillColor={colors.secondary}
      unfillColor="#FFFFFF"
      text={text}
      style={styles.container}
      iconStyle={{borderColor: colors.gray}}
      textStyle={{fontFamily: fonts.family.secondary.regular}}
    />
  );
};
