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
    'Quicksand-Regular': require('./src/assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Medium': require('./src/assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-SemiBold': require('./src/assets/fonts/Quicksand-SemiBold.ttf'),
    'Quicksand-Bold': require('./src/assets/fonts/Quicksand-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={dark}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App;
