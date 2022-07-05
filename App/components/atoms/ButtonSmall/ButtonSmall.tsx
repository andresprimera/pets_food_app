import React from 'react';

import {TouchableOpacity} from 'react-native';

import {styles} from './styles';

interface Props {
  children: JSX.Element;
}

export const ButtonSmall = (props: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log('Andrés Primera');
      }}>
      {props.children}
    </TouchableOpacity>
  );
};
