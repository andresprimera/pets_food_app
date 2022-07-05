import {StyleSheet} from 'react-native';

import {colors, fonts} from '@app/theme';

const {size} = fonts;

export const styles = StyleSheet.create({
  text: {
    color: colors.secondary,
    fontSize: size.h5,
    textAlign: 'left',
    fontFamily: fonts.family.secondary.black,
    cursor: 'pointer',
  },
});
