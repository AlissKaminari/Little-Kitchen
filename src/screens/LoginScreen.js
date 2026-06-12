import { useState } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function LoginScreen({ navigation }) {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Little Kitchen
      </Text>

      <Text style={styles.subtitle}>
        Iniciar Sesión
      </Text>

      <CustomInput
        placeholder="Usuario"
        value={user}
        onChangeText={setUser}
      />

      <CustomInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomButton
        title="Iniciar Sesión"
        onPress={() => navigation.replace('Main')}
      />

      <Text
        style={styles.registerText}
        onPress={() => navigation.navigate('Register')}
      >
        ¿No tienes cuenta? Regístrate
      </Text>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#F3F4F6'
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },

  subtitle: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 30
  },

  registerText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#0c4dd9',
    fontWeight: 'bold'
  }

});