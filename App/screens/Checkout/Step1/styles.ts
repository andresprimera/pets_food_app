import {fonts, metrics} from '@app/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.mainHorizontalPadding,
  },
  inner: {
    paddingHorizontal: metrics.innerHorzontalPadding,
  },
  shipmentContainer: {
    paddingVertical: metrics.innerVerticalPadding,
  },
  title: {
    paddingBottom: 4,
    fontFamily: fonts.family.secondary.medium,
  },
  centeredSmallText: {
    textAlign: 'center',
    marginVertical: metrics.mainVerticalPadding,
  },
});
