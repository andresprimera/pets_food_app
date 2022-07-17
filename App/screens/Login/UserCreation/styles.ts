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
    width: 300,
    minHeight: 10,

    paddingBottom: 20,
  },
  title: {
    fontFamily: fonts.family.secondary.bold,
    textAlign: 'center',
  },
  divider: {
    width: metrics.screenWidth - metrics.screenWidth / 6,
  },
  numberValidation: {
    flex: 3,
    justifyContent: 'space-around',
  },

  centeredText: {
    textAlign: 'center',
  },
  userData: {
    flex: 4,
    justifyContent: 'space-evenly',
  },
  button: {
    flex: 2,
    justifyContent: 'center',
  },
  numberSection: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  numberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberInput: {
    backgroundColor: colors.light,
    height: 45,
    width: 45,
    textAlign: 'center',
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
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
});
