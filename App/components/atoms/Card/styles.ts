import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '@app/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 14,
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginVertical: 3,
  },

  innerContainer: {
    paddingHorizontal: metrics.largeHorizontalPadding,
    paddingVertical: metrics.innerVerticalPadding,
  },

  titleContainer: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: colors.secondaryLight,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.largeHorizontalPadding,
    flexDirection: 'row',
    height: 50,
  },
  title: {
    fontFamily: fonts.family.primary.semiBold,
    color: colors.gray,
  },
  price: {
    fontFamily: fonts.family.secondary.black,
    marginHorizontal: metrics.mainHorizontalPadding,
  },
});
