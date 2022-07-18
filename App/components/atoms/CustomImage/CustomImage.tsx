import React from 'react';

import {View, Image, ViewStyle, ImageSourcePropType} from 'react-native';

import {styles} from './style';

interface Props {
  style?: ViewStyle;
  isRound?: boolean;
  imageUrl: ImageSourcePropType;
}

export const CustomImage = ({style, isRound = false, imageUrl}: Props) => {
  const imageStyle = {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    ...(isRound && {borderRadius: 200}),
  };

  return (
    <View style={[styles.imgContainer, {...style}]}>
      <Image style={imageStyle} source={imageUrl} />
    </View>
  );
};
