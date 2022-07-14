import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const PlusIcon = (props: SvgProps) => {
  return (
    <Svg height={'100%'} width={'100%'} viewBox={'0 0 48 48'} {...props}>
      <Path
        d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z"
        fill={props.color ? props.color : '#707070'}
      />
    </Svg>
  );
};

export default PlusIcon;
