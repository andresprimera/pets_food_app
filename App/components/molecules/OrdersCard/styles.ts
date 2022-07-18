import {fonts, metrics} from '@app/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: metrics.mainVerticalPadding,
  },
  header: {
    fontFamily: fonts.family.secondary.bold,
  },
  lineStretched: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    marginVertical: 2,
  },
  mainContent: {
    paddingVertical: metrics.mainVerticalPadding,
    flexDirection: 'row',
  },
  labels: {
    flex: 2,
  },
  values: {
    flex: 3,
  },
});
