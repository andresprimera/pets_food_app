import React from 'react';

import {
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import {AddressSelection} from './AddressSelection';
import {ShipmentInfo} from './ShipmentInfo';
import {styles} from './styles';

import {InputDatePicker} from '@app/components/atoms/InputDatePicker';

export const Step1 = () => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={250}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <View style={styles.datePicker}>
            <InputDatePicker />
          </View>
          <ShipmentInfo />
          <AddressSelection />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
