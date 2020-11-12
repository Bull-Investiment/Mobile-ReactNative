import React from 'react';
import Routes from './src';

import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';

import { ThemeProvider } from 'styled-components';
import dark from './src/styles/theme/dark';

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={dark}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App;
