import React, { useEffect, useState } from 'react';

import { Container, Content, ButtonWrapper } from '../../../styles/screens/register';

import { useNavigation } from '@react-navigation/native';

import KeyboardAvoidingComponent from '../../../components/KeyboardAvoidingComponent';
import InputText from '../../../components/InputText';
import Button from '../../../components/Button';

function RegisterStepTwo({ route }) {
  const [buttonEnabled, setButtonEnabled] = useState(false)
  const [inputValue, setInputValue] = useState({
    email: "",
    senha: ""
  });

  const navigation = useNavigation();

  const onInputChange = (name, value) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleRegisterUser = () => {
    const userInfo = { ...route.params.userInfo, ...inputValue };
    // chamar api
    // logar via context  
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