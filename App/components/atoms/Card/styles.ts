import {StyleSheet} from 'react-native';

import {colors, metrics} from '@app/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 14,
    justifyContent: 'center',
    paddingHorizontal: metrics.innerHorzontalPadding,
    paddingVertical: metrics.innerHorzontalPadding,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginVertical: 4,
  },
});
