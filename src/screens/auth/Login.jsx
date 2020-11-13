import React, { useEffect, useState } from 'react';

import { Container, Content, ButtonWrapper, RememberMeView, RememberMeText, ImageLogo } from '../../styles/screens/login';


import { useAuth } from '../../contexts/auth';

import KeyboardAvoidingComponent from '../../components/KeyboardAvoidingComponent';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import Checkbox from 'react-native-custom-checkbox';


function Login() {
  const { signIn } = useAuth();

  const [buttonEnabled, setButtonEnabled] = useState(false)
  const [inputValue, setInputValue] = useState({
    email: "",
    senha: "",
    keepConnection: false
  });

  const onInputChange = (name, value) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleUserLogin = () => {
    signIn(inputValue);
  }

  useEffect(() => {
    const { email, senha } = inputValue;

    if (email.includes('@') && senha !== '') {
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
            name="senha"
            value={inputValue.senha}
            onChange={onInputChange}
            isPassword={true}
          />
        </Content>

        <RememberMeView>
          <Checkbox
            style={{
              backgroundColor: '#121212', color: '#297815', borderRadius: 5,
              borderWidth: 3,
              borderColor: '#297815',
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