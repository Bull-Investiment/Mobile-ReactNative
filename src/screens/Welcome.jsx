import React from 'react';

import { 
  SafeArea, 
  Container, 
  androidSafeArea, 
  SvgContainer, 
  Content
} from '../styles/screens/welcome';

import WelcomeSvg from '../assets/illustrations/welcomeSvg.svg';

function Welcome() {
  return (
    <>
    <SafeArea />
      <Container style={androidSafeArea}>
        <SvgContainer>
          <WelcomeSvg width={'100%'} height={'280'} />
        </SvgContainer>
        <Content>
        </Content>
      </Container>
      </>
  );
}

export default Welcome;