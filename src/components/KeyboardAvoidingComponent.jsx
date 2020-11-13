import React from 'react';
import { Platform } from 'react-native';

import { Container, Inner } from '../styles/components/keyboardAvoidingComponent';

function KeyboardAvoidingComponent({ children }) {
  return (
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Inner>
        {children}
      </Inner>
    </Container>
  )

}

export default KeyboardAvoidingComponent;