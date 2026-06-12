import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import CategoryScreen from './src/screens/CategoryScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack =
createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={{
            title: 'Categorías'
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );}