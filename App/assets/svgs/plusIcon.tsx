import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const PlusIcon = (props: SvgProps) => (
  <Svg width={17} height={17} {...props}>
    <Path
      d="M7.589 17V9.411H0V7.589h7.589V0H9.41v7.589H17V9.41H9.411V17Z"
      fill="#707070"
    />
  </Svg>
);

export default PlusIcon;
