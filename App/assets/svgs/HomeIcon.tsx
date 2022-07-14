import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const HomeIcon = (props: SvgProps) => (
  <Svg height={24} width={24} {...props}>
    <Path d="M4 21V9l8-6 8 6v12h-6v-7h-4v7Z" fill={'#ffffff'} />
  </Svg>
);

export default HomeIcon;
