import React from 'react';

import {Text, TouchableOpacity, TextStyle} from 'react-native';

import {styles} from './styles';

interface Props {
  children: string;
  style?: TextStyle;
  onClick: () => void;
}

export const ClickableText = (props: Props) => {
  const {onClick, style} = props;

  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}>
      <Text style={[styles.text, style]}>{props.children}</Text>
    </TouchableOpacity>
  );
};
