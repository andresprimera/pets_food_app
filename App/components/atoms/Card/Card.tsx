import React from 'react';

import {View} from 'react-native';
import {TextRegular} from '../TextRegular';
import {TextH5} from '../TextH5';

import {styles} from './styles';

interface Props {
  children: JSX.Element;
  title?: string;
}

export const Card = ({title, children}: Props) => {
  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.titleContainer}>
          <TextRegular style={styles.title}>{title}</TextRegular>
          <TextH5 style={styles.price}>{'$20'}</TextH5>
        </View>
      )}

      <View style={styles.innerContainer}>{children}</View>
    </View>
  );
};
