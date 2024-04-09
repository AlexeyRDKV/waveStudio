import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { qustionTheme } from '../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 24,
    zIndex: 99,
  },
  pickerButton: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: 'silver',
  },
  pickerDropdown: {
    backgroundColor: '#FFFFFF',
    borderColor: 'silver',
  },
  placeholderLabelDefault: {
    color: 'grey',
  },
});

export default function Picker({ ...props }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(qustionTheme);

  return (
    <View style={styles.container}>
      <DropDownPicker
        style={styles.pickerButton}
        dropDownContainerStyle={styles.pickerDropdown}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholderStyle={styles.placeholderLabelDefault}
        placeholder={'Выбор темы'}
        {...props}
      />
    </View>
  );
}
