import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {colors} from '@app/theme';

const CheckIcon = (props: SvgProps) => (
  <Svg height={40} width={40} {...props}>
    <Path
      d="m15.792 29.833-9.375-9.375 2-2 7.375 7.417 15.791-15.792 1.959 2Z"
      fill={props.color ? props.color : colors.gray}
    />
  </Svg>
);

export default CheckIcon;
