import React from 'react';

import {View, TouchableOpacity, TextStyle} from 'react-native';
import {styles} from './styles';
import {SvgProps} from 'react-native-svg';

import {colors} from '@app/theme';
import {TextMedium} from '../TextMedium';

interface Props {
  children: string;
  style?: TextStyle;
  onClick: () => void;
  Icon?: (props: SvgProps) => JSX.Element;
}

//Color text. I can get it as a prop if needed
const color = colors.secondary;

export const ClickableText = ({onClick, Icon, children, style}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => {
        onClick();
      }}>
      {Icon && (
        <View style={styles.icon}>
          <Icon color={color} />
        </View>
      )}

      <TextMedium style={{color: color}}>{children}</TextMedium>
    </TouchableOpacity>
  );
};
