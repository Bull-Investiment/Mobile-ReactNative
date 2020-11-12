import React from 'react';

import { ButtonContainer, ButtonText } from '../styles/components/button';

function Button({ text, primary = false, onPress }) {
  return (
    <ButtonContainer primary={primary} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}

export default Button;