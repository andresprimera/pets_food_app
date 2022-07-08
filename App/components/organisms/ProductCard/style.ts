import {metrics} from '@app/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imgContainer: {
    flex: 2,
    resizeMode: 'contain',
    justifyContent: 'center',
  },

  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  productInfoContainer: {
    flex: 4,
    marginHorizontal: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  basketIcon: {
    justifyContent: 'center',
    paddingLeft: metrics.screenWidth * 0.05,
  },
  productPrice: {
    marginVertical: 12,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
