import {StyleSheet} from 'react-native';

import {metrics, fonts} from '@app/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: metrics.mainHorizontalPadding,
  },
  psContainer: {
    paddingVertical: metrics.innerVerticalPadding,
    flex: 2,
  },
  dvContainer: {
    paddingVertical: metrics.innerVerticalPadding,
    flex: 2,
  },
  fsContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: metrics.addFooter,
  },
  inner: {
    paddingHorizontal: metrics.innerHorzontalPadding,
    paddingVertical: metrics.mainVerticalPadding,
  },
  subtotal: {
    flex: 1,
    justifyContent: 'space-around',
  },
  subtotalText: {
    alignSelf: 'flex-end',
    fontFamily: fonts.family.secondary.bold,
  },

  title: {
    paddingBottom: 4,
    fontFamily: fonts.family.secondary.medium,
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemDescription: {
    flexDirection: 'row',
  },
  textLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  addressContainer: {
    paddingVertical: metrics.innerVerticalPadding,
  },
  cardTitle: {
    fontFamily: fonts.family.secondary.bold,
  },
  addressText: {
    paddingVertical: 1,
  },
});
