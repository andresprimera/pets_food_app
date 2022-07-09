import {metrics, fonts, colors} from '@app/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerTop: {
    marginHorizontal: metrics.innerHorzontalPadding,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: metrics.mainVerticalPadding,
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
    alignItems: 'center',
    marginBottom: metrics.mainVerticalPadding,
  },
  numberContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: colors.gray,
    borderWidth: 1,
  },
  selectedNumberContainer: {
    borderColor: colors.secondary,
    borderWidth: 2,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
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
