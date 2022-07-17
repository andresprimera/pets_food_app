import React from 'react';

import {View, TextStyle} from 'react-native';

import {TextInput} from 'react-native';

import {styles} from './styles';

import {TextMedium} from '@app/components/atoms/TextMedium';

interface Props {
  isDate?: boolean;
  value?: string;
  label?: string;
  placeholder?: string;
  style?: TextStyle;
}

export const InputText = ({
  isDate = true,
  placeholder = 'Placeholder',
  label = 'label',
  style,
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <TextMedium style={styles.label}>{label}</TextMedium>
      <TextInput
        style={styles.input}
        editable={isDate}
        selectTextOnFocus={isDate}
        placeholder={placeholder}
      />
    </View>
  );
};
