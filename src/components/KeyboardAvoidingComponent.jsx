import React from 'react';
import { Plataform } from 'react-native';

import { Container, Inner } from '../styles/components/keyboardAvoidingComponent';

function KeyboardAvoidingComponent({ children }) {
  return (
    <Container
      behavior={Plataform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Inner>
        {children}
      </Inner>
    </Container>
  )

}

export default KeyboardAvoidingComponent;