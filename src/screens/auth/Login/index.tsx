import React, {useState} from 'react';
import {TextInput, Button, StyleSheet, Alert} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ActivateSmartLock} from '../../../assets/svg';
import {GlobalStore} from '../../../storage/stores';
import {Container, Title} from './styles';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      Alert.alert('Login Successful', `Welcome, ${email}!`);
      GlobalStore.userToken.setValue('authToken', {
        authToken: '1234567890',
      });
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Please enter both email and password.');
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <AntDesign name="user" size={30} color="#900" />
      <ActivateSmartLock />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export default Login;
