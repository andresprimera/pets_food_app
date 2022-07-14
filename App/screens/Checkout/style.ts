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
});
