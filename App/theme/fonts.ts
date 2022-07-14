import {Dimensions, PixelRatio, Platform} from 'react-native';
import {colors} from './colors';

export type AlignFont = 'left' | 'center' | 'right';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 374;

const isNormalized = true;

const normalize = (sizeParams: number) => {
  if (isNormalized) {
    const newSize = sizeParams * scale;
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
  }
};
const size = {
  h1: normalize(38),
  h2: normalize(34),
  h3: normalize(28),
  h4: normalize(26),
  h5: normalize(20),
  large: normalize(18),
  regular: normalize(16),
  medium: normalize(14),
  small: normalize(12),
  tiny: normalize(8.5),
};

const family = {
  primary: {
    thin: 'Montserrat-Thin',
    extraLight: 'Montserrat-ExtraLight',
    light: 'Montserrat-Light',
    regular: 'Montserrat-Regular',
    semiBold: 'Montserrat-SemiBold',
    bold: 'Montserrat-Bold',
    black: 'Montserrat-Black',
  },
  secondary: {
    thin: 'Roboto-Thin',
    light: 'Roboto-Light',
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
    black: 'Roboto-Black',
  },
};

const style = {
  bold: (color: string, mySize = size.small, align: AlignFont) => ({
    color: color ? color : colors.gray,
    fontSize: mySize ? mySize : size.small,
    textAlign: align ? align : 'left',
    fontFamily: 'Montserrat-Bold',
  }),
  semiBold: (color: string, mySize = size.small, align: AlignFont) => ({
    color: color ? color : colors.gray,
    fontSize: mySize ? mySize : size.small,
    textAlign: align ? align : 'left',
    fontFamily: 'Roboto-Medium',
  }),
  regular: (color: string, mySize = size.small, align: AlignFont) => ({
    color: color ? color : colors.gray,
    fontSize: mySize ? mySize : size.small,
    textAlign: align ? align : 'left',
    fontFamily: 'Montserrat-Regular',
  }),
  light: (color: string, mySize = size.small, align: AlignFont) => ({
    color: color ? color : colors.gray,
    fontSize: mySize ? mySize : size.small,
    textAlign: align ? align : 'left',
    textDecorationLine: 'underline',
    fontFamily: 'Montserrat-Light',
  }),
};
export default {
  size,
  style,
  family,
};
