import React from 'react';

import {View, KeyboardAvoidingView, Platform} from 'react-native';

import {styles} from './styles';
import {TextH4} from '@app/components/atoms/TextH4';
import {Divider} from '@app/components/atoms/Divider';
import {Spacer} from './Spacer';
import {LowerSection} from './LowerSection';
import {ImageContainer} from './ImageContainer';

export const NumberReq = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={-140}>
      <ImageContainer />
      <View style={styles.titleContainer}>
        <TextH4 style={styles.title}>¡Sabueso no sabe quién eres!</TextH4>
      </View>
      <Divider style={styles.divider} />
      <LowerSection />
      <Spacer />
    </KeyboardAvoidingView>
  );
};
