import {Dimensions, Platform} from 'react-native';

import {isIphoneX} from 'react-native-iphone-x-helper';

const {width, height} = Dimensions.get('window');
const isXSeriesIphone = isIphoneX();
const addFooter = Platform.OS === 'ios' && isXSeriesIphone ? 20 : 0;
const addHeader = Platform.OS === 'ios' ? (isXSeriesIphone ? 40 : 20) : 0;

export const metrics = {
  screenWidth: width,
  screenHeight: height,
  addHeader,
  addFooter,
  mainHorizontalPadding: width * 0.1,
  innerHorzontalPadding: width * 0.03,
  navbarHeight: 78 + addHeader,
};
