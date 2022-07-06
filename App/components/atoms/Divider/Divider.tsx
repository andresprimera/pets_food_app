import React from 'react';

import {View, ViewStyle} from 'react-native';

import {styles} from './styles';

interface Props {
  style?: ViewStyle;
}

export const Divider = (input: Props) => {
  return <View style={[styles.line, input.style]} />;
};
