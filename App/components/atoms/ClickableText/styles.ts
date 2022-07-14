import {StyleSheet} from 'react-native';

import {fonts} from '@app/theme';

const {size} = fonts;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
    height: 36,
    width: 36,
  },

  text: {
    fontSize: size.large,
    textAlign: 'left',
    fontFamily: fonts.family.primary.semiBold,
    cursor: 'pointer',
  },
});
