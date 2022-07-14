import {StyleSheet} from 'react-native';

import {metrics, fonts} from '@app/theme';

export const styles = StyleSheet.create({
  content: {
    marginHorizontal: metrics.mainHorizontalPadding,
    marginVertical: metrics.mainVerticalPadding,
  },
  recurrentTop: {
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 80,
    width: 80,
  },
  recurrentTopText: {
    margin: metrics.innerHorzontalPadding,
    flex: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  textBold: {
    fontFamily: fonts.family.secondary.medium,
    textAlign: 'center',
    marginTop: 5,
  },
  recurrentBottom: {
    alignItems: 'center',
    marginTop: metrics.innerVerticalPadding,
    marginBottom: metrics.mainVerticalPadding,
  },
  loginSectionContainer: {
    alignItems: 'center',
    margin: metrics.innerVerticalPadding,
  },
  clickableLink: {
    marginTop: 5,
  },
});
