import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const BackIcon = (props: SvgProps) => (
  <Svg height={'100%'} width={'100%'} viewBox="0 0 40 40" {...props}>
    <Path
      d="M16.667 36.667 0 20 16.667 3.333l2.541 2.584L5.125 20l14.083 14.083Z"
      fill={props.color ? props.color : '#ffffff'}
    />
  </Svg>
);

export default BackIcon;
