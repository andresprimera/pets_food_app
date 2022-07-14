import {StyleSheet} from 'react-native';

import {colors, metrics} from '@app/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
    borderRadius: 14,
    height: 40,
    justifyContent: 'center',
    marginVertical: metrics.innerHorzontalPadding,
    marginHorizontal: metrics.innerHorzontalPadding,
  },
});
