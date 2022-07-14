import {StyleSheet} from 'react-native';

import {metrics, fonts} from '@app/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: metrics.mainHorizontalPadding,
  },
  paymentContainer: {
    paddingVertical: metrics.innerVerticalPadding,
    flex: 10,
  },
  inner: {
    paddingHorizontal: metrics.innerHorzontalPadding,
    paddingVertical: metrics.mainVerticalPadding,
  },
  title: {
    paddingBottom: 4,
    fontFamily: fonts.family.secondary.medium,
  },
  button: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingBottom: metrics.addFooter,
  },
});
