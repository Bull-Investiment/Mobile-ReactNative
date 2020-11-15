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
    cpf_cnpj: "",
    age: "",
    state: "",
    city: "",
  });

  const [buttonEnabled, setButtonEnabled] = useState(false)

  const onInputChange = (name, value) => {
    setInputValue({ ...inputValue, [name]: value });

  };

  const goToNextScreen = () => {
    navigation.navigate('RegisterStepTwo', { userInfo: inputValue });
  }

  useEffect(() => {
    const { name, cpf_cnpj, age, state, city } = inputValue;

    if (name !== '' && cpf_cnpj !== '' && parseInt(age) > 0 && state !== '' && city !== '') {
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
            title="CPF ou CNPJ"
            name="cpf_cnpj"
            value={inputValue.cpf_cnpj}
            onChange={onInputChange}
          />

          <InputText
            title="Idade"
            name="age"
            value={inputValue.age}
            onChange={onInputChange}
          />

          <InputText
            title="Estado"
            name="state"
            value={inputValue.state}
            onChange={onInputChange}
          />

          <InputText
            title="Cidade"
            name="city"
            value={inputValue.city}
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