import {StyleSheet} from 'react-native';

import {metrics, fonts} from '@app/theme';

export const styles = StyleSheet.create({
  content: {
    marginHorizontal: metrics.mainHorizontalPadding,
    marginVertical: metrics.mainVerticalPadding,
  },
  recurrentTop: {flexDirection: 'row', alignItems: 'center'},
  recurrentTopText: {margin: metrics.innerHorzontalPadding, flex: 1},
  recurrentTopTextBold: {
    marginTop: 10,
    fontFamily: fonts.family.secondary.medium,
  },
  recurrentBottom: {alignItems: 'center', marginVertical: 10},
  loginSectionContainer: {
    alignItems: 'center',
    margin: metrics.innerHorzontalPadding,
  },
});
