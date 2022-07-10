import React, {useState} from 'react';

import {View} from 'react-native';

import {TextMedium} from '@app/components/atoms/TextMedium';
import {styles} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  number: number;
  isSelected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

const Number = ({number, isSelected = false, setSelected}: Props) => {
  return (
    <TouchableOpacity
      style={
        isSelected ? styles.selectedNumberContainer : styles.numberContainer
      }
      onPress={() => {
        setSelected(number);
      }}>
      <TextMedium style={styles.numbers}>{String(number)}</TextMedium>
    </TouchableOpacity>
  );
};

export const CheckoutStepTracker = () => {
  const [selected, setSelected] = useState<number>(1);

  return (
    <View style={styles.stepsTracker}>
      {[1, 2, 3].map((number, index) => {
        const isSelected = selected >= number;
        const turnLineOn = selected >= number + 1;
        return (
          <View key={'steptracker-' + index} style={styles.numberLineBlock}>
            <Number {...{number, isSelected, setSelected}} />
            {index !== 2 && (
              <View style={turnLineOn ? styles.selectedLine : styles.line} />
            )}
          </View>
        );
      })}
    </View>
  );
};
