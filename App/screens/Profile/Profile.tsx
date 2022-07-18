import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';

import {Navbar} from '@app/components/organisms/Navbar';
import {Divider} from '@app/components/atoms/Divider';
import {UserInfo} from './UserInfo';
import {FirstSection} from './FirstSection';
import {Addresses} from './Addresses';

export const Profile = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.innerContainer}>
        <UserInfo />
        <Divider />
        <FirstSection />
        <Divider />
        <Addresses />
      </View>
    </View>
  );
};
