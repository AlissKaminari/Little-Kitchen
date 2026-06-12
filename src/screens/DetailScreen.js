import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

export default function DetailScreen({ route, navigation }) {

  const { recipe } = route.params;

  const categorias = {
    Beef: 'Res',
    Chicken: 'Pollo',
    Dessert: 'Postre',
    Seafood: 'Mariscos',
    Vegetarian: 'Vegetariano',
    Pasta: 'Pasta',
    Breakfast: 'Desayuno',
    Goat: 'Cabra',
    Lamb: 'Cordero',
    Pork: 'Cerdo'
  };
  const paises = {
    American: 'Estadounidense',
    British: 'Británica',
    Canadian: 'Canadiense',
    Chinese: 'China',
    French: 'Francesa',
    Italian: 'Italiana',
    Japanese: 'Japonesa',
    Mexican: 'Mexicana',
    Spanish: 'Española',
    Thai: 'Tailandesa'
  };

  // Obtener ingredientes automáticamente
  const ingredientes = [];

  for (let i = 1; i <= 20; i++) {

    const ingrediente = recipe[`strIngredient${i}`];
    const medida = recipe[`strMeasure${i}`];

    if (
      ingrediente &&
      ingrediente.trim() !== ''
    ) {
      ingredientes.push(
        `${medida} ${ingrediente}`
      );
    }
  }

  return (
    <ScrollView style={styles.container}>

{/*       <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>◀</Text>
      </TouchableOpacity> */}

      <Image
        source={{ uri: recipe.strMealThumb }}
        style={styles.image}
      />
      <View style={styles.recipeBar}>
        <Text style={styles.recipeTitle}>
          {recipe.strMeal.toUpperCase()}
        </Text>
        <Text style={styles.people}>
          4 PERSONAS
        </Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.infoText}>
          Categoría:
          {' '}
          {categorias[recipe.strCategory] || recipe.strCategory}
        </Text>
        <Text style={styles.infoText}>
          Origen:
          {' '}
          {paises[recipe.strArea] || recipe.strArea}
        </Text>

      </View>
      <Text style={styles.sectionTitle}>
        Ingredientes
      </Text>
      <View style={styles.ingredientsBox}>
        {ingredientes.map((item, index) => (
          <Text
            key={index}
            style={styles.ingredient}
          >
            • {item}
          </Text>
        ))}
      </View>
      <Text style={styles.sectionTitle}>
        Preparación
      </Text>
      <View style={styles.instructionsBox}>
        <Text style={styles.instructions}>
          {recipe.strInstructions}
        </Text>
      </View>
    </ScrollView>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 15
  },
  backButton: {
    marginBottom: 10
  },
  backText: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 20
  },
  recipeBar: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4c2b1c'
  },
  recipeTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  people: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderStyle: 'dashed',
    marginTop: 15,
    elevation: 3
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  ingredientsBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 2,
    borderStyle: 'dashed',
    padding: 15,
    elevation: 2
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 6
  },
  instructionsBox: {
    marginTop: 10,
    marginBottom: 30,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 20,
    padding: 15,
    backgroundColor: '#FFFFFF'
  },
  instructions: {
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'justify'
  }
});