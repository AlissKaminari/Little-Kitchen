import React from 'react';

import { TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

export default function CategoryCard({
  category,
  onPress
}) {

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Image
        source={{
          uri: category.strCategoryThumb
        }}
        style={styles.image}
      />
      <Text style={styles.title}>
        {category.strCategory}
      </Text>
    </TouchableOpacity>
  );}

const styles = StyleSheet.create({
card: {
    width: 130,
    marginRight: 10,
    borderRadius: 15,
    backgroundColor:'#4c2b1c'
},
image: {
    width: '100%',
    height: 80,
    borderRadius: 15
},
title: {
    textAlign: 'center',
    marginTop: 5,
    color: '#ffff'
}});