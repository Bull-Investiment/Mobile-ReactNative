import React from 'react';

import { Container, CustomButton, ButtonText } from '../styles/components/button';

function Button({ text, primary = false, onPress, disabled = false }) {
  return (
    <Container disabled={disabled}>
      <CustomButton disabled={disabled} primary={primary} onPress={onPress}>
        <ButtonText>{text}</ButtonText>
      </CustomButton>
    </Container>
  );
}

export default Button;