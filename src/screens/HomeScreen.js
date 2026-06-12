import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import CategoryCard from '../components/CategoryCard';
import { getRandomRecipe, getCategories, getRecipes } from '../services/mealApi';

export default function HomeScreen({
  navigation
}) {

  const [search, setSearch] = useState('');
  const [recipeDay, setRecipeDay] = useState(null);
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {

    const randomRecipe = await getRandomRecipe();
    const categoriesData = await getCategories();
    const recipesData = await getRecipes();

    setRecipeDay(randomRecipe);
    setCategories(categoriesData);
    setRecipes(recipesData);
  };

  return (

    <ScrollView
      style={styles.container}
    >
      <Text style={styles.title}>
        INICIO
      </Text>
      <SearchBar
        value={search}
        onChangeText={setSearch}
      />
      <Text style={styles.section}>
        RECETA DEL DÍA
      </Text>
      {
        recipeDay &&
        (
          <RecipeCard
            recipe={recipeDay}
            onPress={() =>
              navigation.navigate(
                'Detail',
                { recipe: recipeDay }
              )
            }/>)}
      <Text style={styles.section}>
        CATEGORÍAS
      </Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) =>
        item.idCategory}
      renderItem={({ item }) => (
        <CategoryCard
          category={item}
          onPress={() => navigation.navigate(
          'Category',
          {
            category: item.strCategory
          })}
    />)}/>
      <Text style={styles.section}>
        RECETAS MÁS VISITADAS
      </Text>
      {recipes.slice(0, 5).map(
          (item) => (
            <RecipeCard
              key={item.idMeal}
              recipe={item}
              onPress={() =>
                navigation.navigate(
                  'Detail',
                  { recipe: item }
                )}
            />))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 10,
    padding: 10
  },
  title: {
    fontSize: 28,
    color: '#4c2b1c',
    fontWeight: 'bold'
  },
  section: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4c2b1c',
    marginVertical: 10
  }
});