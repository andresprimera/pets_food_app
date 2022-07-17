import {metrics, fonts} from '@app/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.family.primary.bold,
  },
  titleContainer: {
    paddingVertical: metrics.mainVerticalPadding,
  },
  innerContainer: {
    paddingHorizontal: metrics.mainHorizontalPadding,
  },
  subtitle: {
    paddingVertical: metrics.mainVerticalPadding,
  },
  map: {
    height: metrics.screenWidth,
    backgroundColor: 'blue',
  },
  list: {
    marginVertical: metrics.mainVerticalPadding,
  },
  input: {
    marginTop: 18,
  },
  spacer: {
    height: 160,
  },
});
