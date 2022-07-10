import {StyleSheet} from 'react-native';

import {colors, fonts} from '@app/theme';

const {size} = fonts;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: colors.secondary,
    fontSize: size.large,
    textAlign: 'left',
    fontFamily: fonts.family.secondary.black,
    cursor: 'pointer',
  },
});
