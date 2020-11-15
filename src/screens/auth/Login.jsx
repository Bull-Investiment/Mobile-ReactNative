import React, { useEffect, useState, useContext } from 'react';

import { Container, Content, ButtonWrapper, RememberMeView, RememberMeText, ImageLogo } from '../../styles/screens/login';

import { ThemeContext } from 'styled-components';

import { useAuth } from '../../contexts/auth';

import KeyboardAvoidingComponent from '../../components/KeyboardAvoidingComponent';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import Checkbox from 'react-native-custom-checkbox';

function Login() {
  const theme = useContext(ThemeContext);
  const { signIn } = useAuth();

  const [buttonEnabled, setButtonEnabled] = useState(false)
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    keepConnection: false
  });

  const onInputChange = (name, value) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleUserLogin = () => {
    signIn(inputValue);
  }

  useEffect(() => {
    const { email, password } = inputValue;

    if (email.includes('@') && password !== '') {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }, [inputValue]);

  return (
    <KeyboardAvoidingComponent>
      <Container>
        <Content>
          <ImageLogo source={require('../../assets/images/logo/logo.png')} />

          <InputText
            title="Email"
            name="email"
            value={inputValue.email}
            onChange={onInputChange}
          />

          <InputText
            title="Senha"
            name="password"
            value={inputValue.password}
            onChange={onInputChange}
            isPassword={true}
          />
        </Content>

        <RememberMeView>
          <Checkbox
            style={{
              backgroundColor: theme.colors.backgroundPrimary, color: theme.colors.primary, borderRadius: 5,
              borderWidth: 3,
              borderColor: theme.colors.primaryDarker,
              margin: 10
            }}
            checked={inputValue.keepConnection}
            size={30}
            onChange={() => onInputChange('keepConnection', !inputValue.keepConnection)}
          />
          <RememberMeText>Manter Conectado</RememberMeText>
        </RememberMeView>

      </Container>
      <ButtonWrapper>
        <Button
          text="ENTRAR"
          primary
          onPress={handleUserLogin}
          disabled={!buttonEnabled}
        />
      </ButtonWrapper>
    </KeyboardAvoidingComponent>
  )
}

export default Login;