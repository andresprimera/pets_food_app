import {fonts, metrics} from '@app/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: metrics.mainHorizontalPadding,
  },
  title: {
    alignSelf: 'center',
    paddingVertical: metrics.mainVerticalPadding,
    fontFamily: fonts.family.primary.bold,
  },
});
