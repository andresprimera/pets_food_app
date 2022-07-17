import {colors, fonts, metrics} from '@app/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.light,
    paddingHorizontal: metrics.screenWidth / 8,
    alignItems: 'center',
  },
  imgContainer: {
    maxWidth: 170,
    flex: 3,

    justifyContent: 'flex-end',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    width: 240,
    minHeight: 10,
  },
  lowerSection: {
    flex: 2,
    minHeight: 70,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  spacer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontFamily: fonts.family.primary.bold,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  divider: {
    width: metrics.screenWidth - metrics.screenWidth / 6,
  },
  logoContainer: {
    width: 100,
  },
  forgotPassword: {
    textAlign: 'center',
    alignItems: 'flex-end',
  },
  clickHere: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  },
});
