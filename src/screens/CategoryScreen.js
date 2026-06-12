import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import RecipeCard from '../components/RecipeCard';

export default function CategoryScreen({ route, navigation}) {

  const { category } = route.params;
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
    const data = await response.json();
        setRecipes(data.meals || []);
    } catch (error) {
        console.log('Error:', error);
    } finally {
      setLoading(false);
    }};

  const openRecipe = async (idMeal) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
    const data = await response.json();
      navigation.navigate(
        'Detail',
        {
          recipe: data.meals[0]
        });
    } catch (error) {
      console.log('Error:', error);

    }
  };

  if (loading) {

    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color="#4c2b1c"
        />
        <Text style={styles.loadingText}>
          Cargando recetas...
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {category}
      </Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.idMeal}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={() =>
              openRecipe(item.idMeal)
            }/>
        )}/>
    </View>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F3F4F6'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4c2b1c',
    textAlign: 'center'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: '#4368b3'
  }
});