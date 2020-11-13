import React from 'react';
import { Platform } from 'react-native';

import { useHeaderHeight } from '@react-navigation/stack';

import { Container } from '../styles/components/keyboardAvoidingComponent';

function KeyboardAvoidingComponent({ children }) {
  const headerHeight = useHeaderHeight();

  return (
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={headerHeight + 25}
    >
      {children}
    </Container>
  )

}

export default KeyboardAvoidingComponent;