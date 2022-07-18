import {colors, fonts, metrics} from '@app/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.modalBackgroundColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerContainer: {
    backgroundColor: colors.light,
    width: metrics.screenWidth * 0.7,
    height: metrics.screenHeight * 0.5,
    minHeight: 400,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    marginHorizontal: metrics.screenWidth / 7,
    resizeMode: 'contain',
    justifyContent: 'center',
    paddingVertical: 2,
  },

  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: metrics.screenWidth / 9,
    fontFamily: fonts.family.primary.bold,
  },
  smallText: {
    fontFamily: fonts.family.secondary.thin,
    textAlign: 'center',
    paddingTop: 20,
    paddingHorizontal: metrics.screenWidth * 0.1,
  },
  back: {
    paddingTop: 30,
    fontFamily: fonts.family.secondary.bold,
  },
});
