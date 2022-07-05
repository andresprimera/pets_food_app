import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';

interface Props {
  children: JSX.Element;
}

export const Card = (props: Props) => {
  return <View style={styles.container}>{props.children}</View>;
};
