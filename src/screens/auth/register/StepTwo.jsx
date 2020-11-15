import React, { useEffect, useState } from 'react';

import { useAuth } from '../../../contexts/auth';

import { Container, Content, ButtonWrapper } from '../../../styles/screens/register';

import KeyboardAvoidingComponent from '../../../components/KeyboardAvoidingComponent';
import InputText from '../../../components/InputText';
import Button from '../../../components/Button';

import api from '../../../services/api';

function RegisterStepTwo({ route }) {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    senha: ""
  });

  const { signIn } = useAuth();

  const onInputChange = (name, value) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleRegisterUser = async () => {
    const userInfo = { ...route.params.userInfo, type: '', ...inputValue };

    try {
      const response = await api.post('/users', userInfo);

      const user = response.data.result;
      delete user.password;

      signIn(user);
    } catch (err) {
      console.log(err);
    }
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

      </Container>
      <ButtonWrapper>
        <Button
          text="Cadastrar"
          primary
          onPress={handleRegisterUser}
          disabled={!buttonEnabled}
        />
      </ButtonWrapper>
    </KeyboardAvoidingComponent>
  )
}

export default RegisterStepTwo;