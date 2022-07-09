import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const HomeIcon = (props: SvgProps) => (
  <Svg height={40} width={40} {...props}>
    <Path
      d="M6.667 35V15L20.042 5l13.291 10v20H23.5V23.208h-7.042V35Z"
      fill="#ffffff"
    />
  </Svg>
);

export default HomeIcon;
