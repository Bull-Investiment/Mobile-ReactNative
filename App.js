import React from 'react';
import Routes from './src';

import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';

import { ThemeProvider } from 'styled-components';
import dark from './src/styles/theme/dark';

// Fonts
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

function App() {
  const [fontsLoaded] = useFonts({
    'Quicksand': require('./src/assets/fonts/Quicksand.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

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
