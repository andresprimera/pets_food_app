import {fonts, metrics} from '@app/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  content: {
    marginHorizontal: metrics.mainHorizontalPadding,
    marginVertical: metrics.mainVerticalPadding,
  },

  summaryTitle: {
    backgroundColor: 'blue',
  },
  subtotal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  price: {
    marginLeft: 6,
    fontFamily: fonts.family.secondary.bold,
  },
  divider: {
    marginVertical: 10,
  },
  recurrenceSection: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});
