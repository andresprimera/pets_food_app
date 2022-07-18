import React from 'react';

import {View, Modal, Image, ImageSourcePropType} from 'react-native';

import {MainModalScreensProps} from '@app/config/router/RouteTypes';

import {styles} from './styles';
import {TextH5} from '@app/components/atoms/TextH5';
import {TextSmall} from '@app/components/atoms/TextSmall';
import {ClickableText} from '../../atoms/ClickableText';

interface Props {
  opened: boolean;
  handleCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  navigation?: MainModalScreensProps;
  message: string;
  pictureUrl?: ImageSourcePropType;
  additionalInfo?: string;
}

export const ConfirmationModal = ({
  opened = false,
  handleCloseModal = () => {},
  navigation,
  message = 'La operación ha sido un éxito',
  pictureUrl = require('@app/assets/imgs/celebrationDog.png'),
  additionalInfo,
}: Props) => {
  console.log('handlesCloseModal =>', handleCloseModal);
  return (
    <Modal visible={opened} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.imgContainer}>
            <Image style={styles.image} source={pictureUrl} />
          </View>
          <TextH5 style={styles.text}>{message}</TextH5>

          {additionalInfo && (
            <TextSmall style={styles.smallText}>{additionalInfo}</TextSmall>
          )}
          <ClickableText
            style={styles.back}
            onClick={() => {
              handleCloseModal(false);
              if (navigation) {
                navigation.goBack();
              }
            }}>
            Volver
          </ClickableText>
        </View>
      </View>
    </Modal>
  );
};
