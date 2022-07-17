import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '@app/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.light,
    paddingHorizontal: metrics.screenWidth / 8,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    minHeight: 10,
    paddingBottom: 20,
  },
  title: {
    fontFamily: fonts.family.primary.bold,
    textAlign: 'center',
  },
  divider: {
    width: metrics.screenWidth - metrics.screenWidth / 6,
  },

  centeredText: {
    textAlign: 'center',
  },

  button: {
    flex: 2,
    justifyContent: 'center',
  },
  logoContainer: {
    width: 100,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  spacer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newPassword: {
    flex: 4,
    justifyContent: 'space-evenly',
  },
});
