import React, {useState} from 'react';

import {View, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainModalScreensProps} from '@app/config/router/RouteTypes';

import {styles} from './styles';

import {TextH5} from '@app/components/atoms/TextH5';
import {Divider} from '@app/components/atoms/Divider';
import {TextRegular} from '@app/components/atoms/TextRegular';
import {InputText} from '@app/components/atoms/InputText';
import {Button} from '@app/components/atoms/Button';
import {ConfirmationModal} from '@app/components/atoms/ConfirmationModal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
  const [opened, setOpened] = useState<boolean>(false);
  const navigation = useNavigation<MainModalScreensProps>();

  return (
    <View>
      <ConfirmationModal
        opened={opened}
        handleCloseModal={setOpened}
        navigation={navigation}
        message="Dirección creada con éxito"
      />
      <View style={styles.titleContainer}>
        <TextH5 style={styles.title}>Agregar nueva dirección</TextH5>
      </View>
      <Divider />
      <KeyboardAwareScrollView>
        <View style={styles.innerContainer}>
          <TextRegular style={styles.subtitle}>
            Indica la ubicación en el mapa
          </TextRegular>
        </View>
        <ImageBackground
          source={require('@app/assets/imgs/googleMapDummy.png')}
          resizeMode="cover"
          style={styles.map}
        />
        <View style={styles.innerContainer}>
          <View style={styles.list}>
            {fields.map((field, i) => {
              return <Item key={'address-' + i} item={field} />;
            })}
          </View>
          <Button
            onPress={() => {
              setOpened(!opened);
            }}
            text="Crear Dirección"
          />
          <View style={styles.spacer} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
