import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress }) {

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  button: {
    backgroundColor: '#8c662d',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10
  },

  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  }

});