import React from 'react';
import { Container, Title, Input } from '../styles/components/inputText';

function InputText({ title, name, value, onChange, isPassword = false}) {
  return (
    <Container>
      <Title>{title}</Title>
      
      <Input
        value={value}
        secureTextEntry={isPassword}
        onChangeText={(text) => onChange(name, text)}
      />
    </Container>
  )
}

export default InputText;