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
import {FinishRegistry} from './FinishRegistry';
import {NameAndPassword} from './NameAndPassword';
import {NumberValidation} from './NumberValidation';

export const UserCreation = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={-90}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.titleContainer}>
            <TextH4 style={styles.title}>
              Parece que eres nuevo en PETS food
            </TextH4>
          </View>
          <Divider style={styles.divider} />
          <NumberValidation />
          <NameAndPassword />
          <FinishRegistry />
          <Spacer />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
