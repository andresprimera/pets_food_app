import {Dimensions, Platform} from 'react-native';

import {isIphoneX} from 'react-native-iphone-x-helper';

const {width, height} = Dimensions.get('window');
const isXSeriesIphone = isIphoneX();
const addFooter = Platform.OS === 'ios' && isXSeriesIphone ? 40 : 0;
const addHeader = Platform.OS === 'ios' ? (isXSeriesIphone ? 40 : 20) : 0;

export const metrics = {
  screenWidth: width,
  screenHeight: height,
  addHeader,
  addFooter,
  largeHorizontalPadding: width * 0.06,
  largeVerticalPadding: width * 0.05,
  mainHorizontalPadding: width * 0.04,
  mainVerticalPadding: width * 0.04,
  innerHorzontalPadding: width * 0.02,
  innerVerticalPadding: width * 0.01,
  navbarHeight: 78 + addHeader,
};
