import * as React from 'react';
import Svg, {SvgProps, Defs, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const HomeIcon = (props: SvgProps) => (
  <Svg width={41.817} height={44.795} {...props}>
    <Defs />
    <Path
      data-name="home_FILL1_wght400_GRAD0_opsz48"
      d="M9 32.795V14.932L20.983 6l11.834 8.932v17.863h-8.708V22.188h-6.438v10.607Z"
      fill="#fff"
    />
  </Svg>
);

export default HomeIcon;
