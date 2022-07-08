import React from 'react';
import {ScrollView, View} from 'react-native';

import {styles} from './styles';
import {Navbar} from '@app/components/organisms/Navbar';
import {Card} from '@app/components/atoms/Card';
import {BasketSumary} from './BasketSumary';
import {Divider} from '@app/components/atoms/Divider';
import {ListItem} from '@app/components/organisms/ListItem';

export const Basket = () => {
  return (
    <View>
      <Navbar />
      <View style={styles.content}>
        <Card title={'Cesta de compras'}>
          <BasketSumary />
        </Card>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.content}>
        <ScrollView>
          <ListItem />
          <Divider />
          <ListItem />
          <Divider />
          <ListItem />
          <Divider />
          <ListItem />
          <Divider />
          <ListItem />
          <Divider />
          <ListItem />
          <Divider />
          <ListItem />
          <Divider />
          <ListItem />
          <Divider />
          <ListItem />
          <Divider />
          <ListItem />
          <Divider />
          <ListItem />
          <Divider />
          <ListItem />
          <Divider />
          <ListItem />
          <Divider />
          <ListItem />
          <Divider />
        </ScrollView>
      </View>
    </View>
  );
};
