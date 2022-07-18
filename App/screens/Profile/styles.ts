import {metrics, fonts} from '@app/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: metrics.mainHorizontalPadding,
    flex: 1,
  },
  userInfo: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {height: 100, width: 100},
  name: {
    paddingLeft: metrics.screenWidth / 20,
    width: metrics.screenWidth * 0.6,
  },
  firstSection: {
    flex: 3,
    justifyContent: 'space-evenly',
  },
  addresses: {
    flex: 6,
  },
  label: {
    paddingBottom: 10,
    fontFamily: fonts.family.secondary.medium,
    paddingTop: metrics.mainVerticalPadding,
  },
  noAddressMessage: {
    alignSelf: 'center',
    maxWidth: 250,
    paddingVertical: metrics.mainVerticalPadding,
  },
  spacer: {
    height: 50,
  },
  clickableText: {
    alignSelf: 'center',
    paddingTop: 20,
  },
});
