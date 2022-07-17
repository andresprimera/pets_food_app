import React from 'react';

import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {MainModalScreensProps} from '@app/config/router/RouteTypes';

import {styles} from './styles';

import {TextH5} from '@app/components/atoms/TextH5';
import {Divider} from '@app/components/atoms/Divider';
import {TextRegular} from '@app/components/atoms/TextRegular';
import {InputText} from '@app/components/atoms/InputText';
import {Button} from '@app/components/atoms/Button';

const fields = [
  {label: 'Alias de dirección', placeholder: 'Ej. Oficina / Casa'},
  {label: 'Dirección', placeholder: 'Ej. San Antonio a Santa Isabel'},
  {label: 'Casa o Edificio', placeholder: 'Ej. Edificio Abilene'},
  {label: 'Apartamento o número', placeholder: 'Ej. Casa 49'},
  {label: 'Urbanización', placeholder: 'Ej. La Pastora'},
  {label: 'Ciudad', placeholder: 'Ej. Caracas'},
  {label: 'Referencia', placeholder: 'Ej. Al lado del Farmatodo'},
];

const Item = (field: any) => {
  const item = field.item;
  return (
    <InputText
      style={styles.input}
      label={item.label}
      placeholder={item.placeholder}
    />
  );
};

export const AddAddress = () => {
  const navigation = useNavigation<MainModalScreensProps>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={0}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.titleContainer}>
            <TextH5 style={styles.title}>Agregar nueva dirección</TextH5>
          </View>
          <Divider />
          <ScrollView>
            <View style={styles.innerContainer}>
              <TextRegular style={styles.subtitle}>
                Indica la ubicación en el mapa
              </TextRegular>
            </View>
            <View style={styles.map}>
              <Text>Map</Text>
            </View>
            <View style={styles.innerContainer}>
              <View style={styles.list}>
                {fields.map((field, i) => {
                  return <Item key={'address-' + i} item={field} />;
                })}
              </View>
              <Button
                onPress={() => navigation.goBack()}
                text="Crear Dirección"
              />
              <View style={styles.spacer} />
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
