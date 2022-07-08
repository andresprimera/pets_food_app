import {StyleSheet} from 'react-native';

import {colors} from '@app/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    width: 'auto',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignSelf: 'flex-start',
  },
});
