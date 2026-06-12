import { TouchableOpacity, Image, Text,StyleSheet } from 'react-native';

export default function RecipeCard({ recipe, onPress}) {

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Image
        source={{
          uri: recipe.strMealThumb
        }}
        style={styles.image}
      />
      <Text style={styles.title}>
        {recipe.strMeal}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor:'#4c2b1c',
    borderWidth: 2,
    borderStyle: 'dashed',
    marginBottom: 15
  },
  image: {
    width: '100%',
    height: 180
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#ffff',
    padding: 10
  }
});