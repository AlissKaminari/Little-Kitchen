import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function SearchBar({
  value,
  onChangeText
}) {
  return (
    <TextInput
      placeholder="Buscar receta..."
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 12,
    marginVertical: 10
  }
});