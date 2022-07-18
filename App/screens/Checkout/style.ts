import {metrics, fonts, colors} from '@app/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerTop: {
    paddingHorizontal: metrics.innerHorzontalPadding,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: metrics.mainVerticalPadding,
  },
  icon: {
    height: 30,
    width: 30,
  },
  title: {
    fontFamily: fonts.family.primary.bold,
  },
  stepsTracker: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: metrics.mainVerticalPadding,
  },
  numberLineBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: colors.gray,
    borderWidth: 1,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    backgroundColor: colors.light,
  },
  selectedNumberContainer: {
    borderColor: colors.secondary,
    borderWidth: 2,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    backgroundColor: colors.light,
  },
  numbers: {
    fontSize: fonts.size.medium,
    fontFamily: fonts.family.primary.semiBold,
  },
  line: {
    backgroundColor: colors.gray,
    width: metrics.screenWidth / 5,
    height: 1,
    marginHorizontal: 3,
  },
  selectedLine: {
    backgroundColor: colors.secondary,
    width: metrics.screenWidth / 5,
    height: 1,
    marginHorizontal: 3,
  },

  container: {
    backgroundColor: colors.modalBackgroundColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerContainer: {
    backgroundColor: colors.light,
    width: metrics.screenWidth * 0.7,
    minHeight: 400,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: metrics.largeVerticalPadding + 20,
  },
  orderNumber: {
    fontFamily: fonts.family.secondary.bold,
    paddingBottom: metrics.largeVerticalPadding,
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
    paddingHorizontal: metrics.screenWidth / 15,
    fontFamily: fonts.family.primary.bold,
  },
  smallText: {
    fontFamily: fonts.family.secondary.thin,
    textAlign: 'center',
    paddingTop: 20,
    paddingHorizontal: metrics.screenWidth * 0.1,
  },
  actionButtonsContainer: {
    paddingVertical: metrics.innerVerticalPadding,
    alignItems: 'center',
  },
  action: {
    paddingTop: 10,
    fontFamily: fonts.family.secondary.bold,
  },
});
