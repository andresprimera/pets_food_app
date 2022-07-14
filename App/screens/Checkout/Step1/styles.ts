import {fonts, metrics} from '@app/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.mainHorizontalPadding,
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  inner: {
    paddingHorizontal: metrics.innerHorzontalPadding,
    paddingVertical: metrics.mainVerticalPadding,
  },
  datePicker: {
    flex: 3,
    justifyContent: 'center',
  },
  shipmentContainer: {
    paddingVertical: metrics.innerVerticalPadding,
    flex: 3,
    justifyContent: 'center',
  },
  addressContainer: {
    paddingVertical: metrics.innerVerticalPadding,
    flex: 8,
  },
  title: {
    paddingBottom: 4,
    fontFamily: fonts.family.secondary.medium,
  },
  centeredSmallText: {
    textAlign: 'center',
    marginVertical: metrics.mainVerticalPadding,
  },
  addAddress: {
    alignItems: 'center',
  },
  button: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingBottom: metrics.addFooter,
  },
});
