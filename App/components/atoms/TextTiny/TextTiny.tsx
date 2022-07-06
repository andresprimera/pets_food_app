import React from 'react';

import {Text, TextStyle} from 'react-native';

import {styles} from './styles';

interface Props {
  children: string;
  style?: TextStyle;
}

export const TextTiny = (props: Props) => {
  const {style} = props;

  return <Text style={[styles.text, style]}>{props.children}</Text>;
};
