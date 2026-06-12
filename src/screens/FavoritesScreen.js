import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FavoritesScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Favoritos
      </Text>
      <Text style={styles.text}>
        Aquí aparecerán tus recetas favoritas.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  text: {
    marginTop: 15,
    fontSize: 16
  }
});