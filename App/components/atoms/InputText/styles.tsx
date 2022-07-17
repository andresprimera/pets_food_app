import {StyleSheet} from 'react-native';
import {colors, fonts} from '@app/theme';

export const styles = StyleSheet.create({
  container: {
    minWidth: 200,
  },
  input: {
    backgroundColor: colors.light,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    height: 40,
    paddingHorizontal: 15,
    color: colors.gray,
  },
  label: {
    paddingBottom: 4,
    fontFamily: fonts.family.secondary.medium,
  },
});
