import {StyleSheet} from 'react-native';

import {colors, metrics} from '@app/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: metrics.navbarHeight,
    justifyContent: 'space-between',
    paddingHorizontal: metrics.mainHorizontalPadding,
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: metrics.addHeader,
  },
});
