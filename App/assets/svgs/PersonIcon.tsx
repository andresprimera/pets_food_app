import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {colors} from '@app/theme';

const PersonIcon = (props: SvgProps) => (
  <Svg height={40} width={40} {...props}>
    <Path
      d="M20 19.958q-2.75 0-4.562-1.812-1.813-1.813-1.813-4.563t1.813-4.562Q17.25 7.208 20 7.208t4.562 1.813q1.813 1.812 1.813 4.562t-1.813 4.563Q22.75 19.958 20 19.958ZM6.667 33.333v-4.166q0-1.542.77-2.688.771-1.146 2.021-1.729 2.709-1.25 5.313-1.896 2.604-.646 5.229-.646t5.208.646q2.584.646 5.334 1.896 1.25.583 2.02 1.729.771 1.146.771 2.688v4.166Z"
      fill={colors.light}
    />
  </Svg>
);

export default PersonIcon;
