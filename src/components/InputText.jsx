import React from 'react';
import { Container, Title, Input } from '../styles/components/inputText';

function InputText({ title = undefined, name, value, onChange, isPassword = false, titleColor = undefined, textColor = undefined, backgroundColor = undefined, hasBorderBottom = undefined, borderColor = undefined }) {
  return (
    <Container hasBorderBottom={hasBorderBottom} borderColor={borderColor}>
      {title && <Title titleColor={titleColor}>{title}</Title>}

      <Input
        hasBorderBottom={hasBorderBottom}
        backgroundColor={backgroundColor}
        textColor={textColor}
        value={value}
        secureTextEntry={isPassword}
        onChangeText={(text) => onChange(name, text)}
      />
    </Container>
  )
}

export default InputText;