import React, { forwardRef } from 'react';
import {
  TextInput as RNTextInput,
  View,
  StyleSheet,
  Platform,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    padding: Platform.OS === 'ios' ? 16 : 6,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 8,
  },
});

function TextInput({ style, refProp, onBlur = () => {}, ...props }) {
  return (
    <View style={styles.container}>
      <RNTextInput
        ref={refProp}
        style={style}
        placeholderTextColor={'grey'}
        onBlur={onBlur}
        {...props}
      />
    </View>
  );
}

export default forwardRef((props, ref) => (
  <TextInput {...props} refProp={ref} />
));
