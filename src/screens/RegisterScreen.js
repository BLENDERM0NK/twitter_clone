import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    reEnterPassword: ''
  });

  const navigation = useNavigation();

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && (password === reEnterPassword)) {
      Alert.alert('Success', 'Registration successful');
      navigation.navigate('Login');
    } else {
      Alert.alert('Invalid Data', 'Please check your input');
    }
  };

  return (
    <View style={styles.register}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleChange('name', text)}
        value={user.name}
        placeholder="Your Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleChange('email', text)}
        value={user.email}
        placeholder="Your Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleChange('password', text)}
        value={user.password}
        placeholder="Your Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleChange('reEnterPassword', text)}
        value={user.reEnterPassword}
        placeholder="Re-enter your Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={register}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  register: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 8,
  },
});
