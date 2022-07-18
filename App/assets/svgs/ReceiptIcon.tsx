import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ReceiptIcon = (props: SvgProps) => (
  <Svg height={40} width={40} {...props}>
    <Path
      d="M5 36.625V3.375l2.5 2.5 2.5-2.5 2.5 2.5 2.5-2.5 2.5 2.5 2.5-2.5 2.5 2.5 2.5-2.5 2.5 2.5 2.5-2.5 2.5 2.5 2.5-2.5v33.25l-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5-2.5-2.5Zm4.917-8.75h20.291v-2.75H9.917Zm0-6.5h20.291v-2.75H9.917Zm0-6.5h20.291v-2.792H9.917Z"
      fill={'white'}
    />
  </Svg>
);

export default ReceiptIcon;
