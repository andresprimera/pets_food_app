import React from 'react';

import {View} from 'react-native';

import {TextInput} from 'react-native';

import {styles} from './styles';

import {TextMedium} from '@app/components/atoms/TextMedium';

interface Props {
  isDate?: boolean;
  value?: string;
  label?: string;
  placeholder?: string;
}

export const InputText = ({
  isDate = true,
  placeholder = 'Placeholder',
  label = 'label',
}: Props) => {
  return (
    <View style={styles.container}>
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
