import React from 'react';
import {View} from 'react-native';

import {Navbar} from '@app/components/organisms/Navbar';
import {Divider} from '@app/components/atoms/Divider';
import {styles} from './styles';
import {RecurrentSection} from './RecurrentSection';
import {LoginSection} from './LoginSection';
import {CardsScroll} from './CardsScroll';

export const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <View style={styles.content}>
        <RecurrentSection />
        <Divider />
        <LoginSection />
        <Divider />
        <CardsScroll />
      </View>
    </>
  );
};
