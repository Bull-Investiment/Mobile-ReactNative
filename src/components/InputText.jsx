import React from 'react';
import { Container, Title, Input } from '../styles/components/inputText';

function InputText({ title, value = "", onChange}) {
  return (
    <Container>
      <Title>{title}</Title>
      
      <Input
        value={value}
        onChange={onChange}
      />
    </Container>
  )
}

export default InputText;