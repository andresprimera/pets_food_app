import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '@app/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 14,
    justifyContent: 'center',

    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginVertical: 4,
  },

  innerContainer: {
    paddingHorizontal: metrics.mainHorizontalPadding,
    paddingVertical: metrics.innerHorzontalPadding,
  },

  titleContainer: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: colors.secondaryLight,
    height: 40,
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.family.primary.semiBold,
    color: colors.gray,
    paddingHorizontal: metrics.mainHorizontalPadding,
  },
});
