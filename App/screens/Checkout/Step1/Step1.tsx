import React from 'react';

import {
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CheckoutStackParamList} from '../CheckoutRouteTypes';

import {Button} from '@app/components/atoms/Button';
import {AddressSelection} from './AddressSelection';
import {ShipmentInfo} from './ShipmentInfo';
import {styles} from './styles';

import {InputDatePicker} from '@app/components/atoms/InputDatePicker';

type checkoutProps = StackNavigationProp<CheckoutStackParamList, 'Step2'>;

function handleNavigate(navigation: checkoutProps) {
  navigation.navigate('Step2');
}

export const Step1 = () => {
  const navigation = useNavigation<checkoutProps>();

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
          <Button
            propStyle={styles.button}
            text={'Siguiente'}
            onPress={() => handleNavigate(navigation)}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
