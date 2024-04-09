import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5D3FD3',
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default function Button({ label, onPress = () => {} }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}
