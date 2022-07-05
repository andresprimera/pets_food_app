import {StyleSheet} from 'react-native';

import {colors, fonts} from '@app/theme';

const {size} = fonts;

export const styles = StyleSheet.create({
  text: {
    color: colors.gray,
    fontSize: size.tiny,
    textAlign: 'left',
    fontFamily: fonts.family.secondary.regular,
  },
});
