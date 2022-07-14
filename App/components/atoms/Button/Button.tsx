import React from 'react';

import {View, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';

import {colors, fonts} from '@app/theme';

import {styles} from './style';
import {TextRegular} from '../TextRegular';

interface Props {
  text: string;
  propStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const Button = ({text, propStyle, onPress}: Props) => {
  return (
    <View style={propStyle}>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={styles.container}>
        <TextRegular
          style={{
            color: colors.light,
            fontFamily: fonts.family.secondary.light,
          }}>
          {text}
        </TextRegular>
      </TouchableOpacity>
    </View>
  );
};
