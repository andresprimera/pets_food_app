import {StyleSheet} from 'react-native';

import {metrics, fonts} from '@app/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgrounColor: 'blue',
    paddingHorizontal: metrics.mainHorizontalPadding,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.family.primary.bold,
    marginHorizontal: metrics.screenWidth * 0.05,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 4,
    marginHorizontal: metrics.innerHorzontalPadding,
    justifyContent: 'space-evenly',
  },
  text: {
    textAlign: 'justify',
  },
  boldText: {
    fontFamily: fonts.family.secondary.bold,
  },
  stepContainer: {
    flexDirection: 'row',
  },
  number: {
    marginVertical: 4,
  },
  stepDescription: {
    marginVertical: 4,
    flex: 1,
  },
  spacer: {
    flex: 3,
  },
});
