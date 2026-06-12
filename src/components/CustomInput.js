import { TextInput, StyleSheet } from 'react-native';

export default function CustomInput({placeholder,value,onChangeText,
  secureTextEntry}) {

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    padding: 12,
    marginVertical: 10
  }});