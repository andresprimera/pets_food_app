import React from 'react';

import {Text} from 'react-native';

import {styles} from './styles';

interface Props {
  children: string;
  fontFamily?: string;
  color?: string;
}

export const TextH1 = (props: Props) => {
  const {color, fontFamily} = props;

  const additionalStyles = {
    ...(color && {color}),
    ...(fontFamily && {fontFamily}),
  };

  return <Text style={[styles.text, additionalStyles]}>{props.children}</Text>;
};
