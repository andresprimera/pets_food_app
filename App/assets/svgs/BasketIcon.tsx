import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const BasketIcon = (props: SvgProps) => (
  <Svg width={24.78} height={20.845} {...props}>
    <Path
      d="M3.634 20.85 0 7.732h6.612L11.666.356a1.141 1.141 0 0 1 .3-.26.813.813 0 0 1 .765 0 1.141 1.141 0 0 1 .3.26l5.027 7.376h6.722L21.091 20.85ZM8.606 7.732h7.458L12.35 2.268Zm3.77 8.2a1.632 1.632 0 1 0-1.161-.478 1.581 1.581 0 0 0 1.161.474Z"
      fill="#fafafa"
    />
  </Svg>
);

export default BasketIcon;
