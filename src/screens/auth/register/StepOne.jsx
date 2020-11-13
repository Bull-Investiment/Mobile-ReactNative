import React, { useEffect, useState } from 'react';

import { Container, Content, ButtonWrapper } from '../../../styles/screens/register';

import { useNavigation } from '@react-navigation/native';

import KeyboardAvoidingComponent from '../../../components/KeyboardAvoidingComponent';
import InputText from '../../../components/InputText';
import Button from '../../../components/Button';

function Register() {
  const navigation = useNavigation();

  const [inputValue, setInputValue] = useState({
    name: "",
    cpf: "",
    estado: "",
    cidade: "",
  });

  const [buttonEnabled, setButtonEnabled] = useState(false)

  const onInputChange = (name, value) => {
    setInputValue({ ...inputValue, [name]: value });

  };

  const goToNextScreen = () => {
    navigation.navigate('RegisterStepTwo', { userInfo: inputValue });
  }

  useEffect(() => {
    const { name, cpf, estado, cidade } = inputValue;

    if (name !== '' && cpf !== '' && estado !== '' && cidade !== '') {
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
            title="Nome Completo"
            name="name"
            value={inputValue.name}
            onChange={onInputChange}
          />

          <InputText
            title="CPF"
            name="cpf"
            value={inputValue.cpf}
            onChange={onInputChange}
          />

          <InputText
            title="Estado"
            name="estado"
            value={inputValue.estado}
            onChange={onInputChange}
          />

          <InputText
            title="Cidade"
            name="cidade"
            value={inputValue.cidade}
            onChange={onInputChange}
          />
        </Content>

      </Container>
        <ButtonWrapper>
          <Button
            text="Próximo"
            primary
            onPress={goToNextScreen}
            disabled={!buttonEnabled}
          />
        </ButtonWrapper>
    </KeyboardAvoidingComponent>
  )
}

export default Register;