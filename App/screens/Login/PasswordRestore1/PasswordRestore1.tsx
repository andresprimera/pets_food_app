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
import {ValidateCode} from './ValidateCode';
import {NumberValidation} from './NumberValidation';
import {TextMedium} from '@app/components/atoms/TextMedium';
import {TextSmall} from '@app/components/atoms/TextSmall';
import {ClickableText} from '@app/components/atoms/ClickableText';

export const PasswordRestore1 = () => {
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
          <NumberValidation />

          <View style={styles.sendCodeAgain}>
            <TextMedium>¿No recibiste el código?</TextMedium>
            <TextSmall>Tiempo para volver a enviar: 2:00min</TextSmall>
            <ClickableText onClick={() => console.log('Andres')}>
              Volver a enviar
            </ClickableText>
          </View>
          <ValidateCode />
          <Spacer />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
