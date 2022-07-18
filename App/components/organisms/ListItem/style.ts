import {fonts, metrics} from '@app/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  description: {
    flex: 4,
    justifyContent: 'center',
  },
  buttons: {
    flex: 2,
  },
  price: {
    fontFamily: fonts.family.secondary.bold,
    paddingLeft: 3,
    paddingBottom: 5,
  },

  buttonsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: metrics.innerHorzontalPadding,
  },
  qty: {
    marginHorizontal: 20,
  },
  buttonSize: {
    height: 40,
    width: 40,
  },
  spacer: {
    flex: 1,
  },
});
