import React, { useState } from 'react';
import { View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,ScrollView } from 'react-native';

export default function RegisterScreen({ navigation }) {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const registrarUsuario = () => {

    if (
      nombre.trim() === '' ||
      correo.trim() === '' ||
      usuario.trim() === '' ||
      password.trim() === ''
    ) {
      Alert.alert(
        'Error',
        'Por favor complete todos los campos'
      );
      return;
    }

    Alert.alert(
      'Registro exitoso',
      'Tu cuenta ha sido creada correctamente',
      [
        {
          text: 'Aceptar',
          onPress: () => navigation.replace('Main')
        }
      ]
    );
  };

  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>
        Crear Cuenta
      </Text>
      <View style={styles.formCard}>
        <Text style={styles.label}>
          Nombre completo
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <Text style={styles.label}>
          Correo electrónico
        </Text>
        <TextInput
          style={styles.input}
          placeholder="correo@ejemplo.com"
          keyboardType="email-address"
          value={correo}
          onChangeText={setCorreo}
        />
        <Text style={styles.label}>
          Usuario
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          value={usuario}
          onChangeText={setUsuario}
        />
        <Text style={styles.label}>
          Contraseña
        </Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.registerButton}
          onPress={registrarUsuario}
        >
          <Text style={styles.registerButtonText}>
            Registrarse
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginLink}>
          ¿Ya tienes cuenta? Inicia sesión
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  content: {
    padding: 25,
    justifyContent: 'center',
    flexGrow: 1
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    elevation: 5
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    backgroundColor: '#FFFFFF'
  },
  registerButton: {
    marginTop: 25,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center'
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  loginLink: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600'
  }
});