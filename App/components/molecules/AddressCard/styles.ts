import {StyleSheet} from 'react-native';

import {fonts, metrics} from '@app/theme';

export const styles = StyleSheet.create({
  container: {
    marginVertical: metrics.mainVerticalPadding,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
  title: {
    marginVertical: 2,
    fontFamily: fonts.family.secondary.bold,
  },
  line: {
    marginVertical: 2,
  },
  icon: {
    justifyContent: 'center',
  },
});
