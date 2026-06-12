import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {

  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Inicio') {
            iconName = 'home';
          } else {
            iconName = 'heart';
          }
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: '#4c2b1c',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}>
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Favoritos"
        component={FavoritesScreen}
      />
    </Tab.Navigator>

  );
}