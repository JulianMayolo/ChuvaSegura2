import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import LogoImg from '../../assets/logo.png';

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
  Labels
} from './styles';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth'

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>

      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo
          source={LogoImg}
        />
        <Labels>E-Mail</Labels>
        <AreaInput>
          <Input
            placeholder="Seu email"
            value={email}
            onChangeText={(text) => setEmail(text.toLowerCase())}
          />
        </AreaInput>
        <Labels>Senha</Labels>
        <AreaInput>
          <Input
            placeholder="Sua senha"
            value={password}
            onChangeText={(text) => setPassword(text.toLowerCase())}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubmitText>Login</SubmitText>
            )
          }
        </SubmitButton>

        <Link onPress={() => navigation.navigate('CreateUser')}>
          <LinkText>Criar nova conta</LinkText>
        </Link>

      </Container>

    </Background>
  )
}