import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const MinusIcon = (props: SvgProps) => (
  <Svg width={15} height={2} {...props}>
    <Path d="M0 2V0h15v2Z" fill="#707070" />
  </Svg>
);

export default MinusIcon;
