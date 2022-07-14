import React, {useState} from 'react';

import DatePicker from 'react-native-date-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {InputText} from '../InputText';

export const InputDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setOpen(true);
        }}>
        <InputText
          label={'Fecha de entrega'}
          placeholder={'DD/MM/YYYY'}
          isDate={false}
        />
      </TouchableOpacity>

      <DatePicker
        modal
        mode={'date'}
        minimumDate={new Date()}
        open={open}
        date={selectedDate}
        onConfirm={date => {
          console.log('date =>', date);
          setOpen(false);
          setSelectedDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
