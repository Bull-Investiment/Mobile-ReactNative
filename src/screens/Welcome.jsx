import React from 'react';
import { StatusBar } from 'react-native';

import { SafeArea } from '../styles/screens/welcome';

function Welcome() {
  return (
    <SafeArea style={{paddingTop: StatusBar.currentHeight + 15}}>

    </SafeArea>
  );
}

export default Welcome;