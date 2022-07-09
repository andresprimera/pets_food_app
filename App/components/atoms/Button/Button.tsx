import React from 'react';

import {TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@app/config/router/RouteTypes';

import {colors, fonts} from '@app/theme';

import {styles} from './style';
import {TextRegular} from '../TextRegular';

interface Props {
  text: string;
}

type authScreenProp = StackNavigationProp<RootStackParamList, 'Checkout'>;

export const Button = ({text}: Props) => {
  const navigation = useNavigation<authScreenProp>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Checkout');
      }}
      style={styles.container}>
      <TextRegular
        style={{color: colors.light, fontFamily: fonts.family.secondary.light}}>
        {text}
      </TextRegular>
    </TouchableOpacity>
  );
};
