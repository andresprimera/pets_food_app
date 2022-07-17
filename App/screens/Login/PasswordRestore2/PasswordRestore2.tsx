import React from 'react';

import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import {styles} from './styles';

import {TextH4} from '@app/components/atoms/TextH4';
import {Divider} from '@app/components/atoms/Divider';
import {Spacer} from './Spacer';
import {Confirm} from './Confirm';
import {PaswordCreation} from './PaswordCreation';

export const PasswordRestore2 = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={-90}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.titleContainer}>
            <TextH4 style={styles.title}>Recuperar contraseña</TextH4>
          </View>
          <Divider style={styles.divider} />
          <PaswordCreation />
          <Confirm />
          <Spacer />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
