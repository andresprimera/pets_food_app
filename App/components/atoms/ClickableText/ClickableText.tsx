import React from 'react';

import {Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

interface Props {
  children: string;
  fontFamily?: string;
  color?: string;
  onClick: () => void;
}

export const ClickableText = (props: Props) => {
  const {color, fontFamily, onClick} = props;

  const additionalStyles = {
    ...(color && {color}),
    ...(fontFamily && {fontFamily}),
  };

  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}>
      <Text style={[styles.text, additionalStyles]}>{props.children}</Text>
    </TouchableOpacity>
  );
};
