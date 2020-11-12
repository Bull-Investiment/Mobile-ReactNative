import React, { useContext } from 'react';
import { View } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import { ThemeContext } from 'styled-components';

import {
  SafeArea,
  Container,
  androidSafeArea,
  SvgContainer,
  Content,
  WelcomeText,
  ButtonWrapper,
  Footer,
  FooterText,
  FooterButtonsWrapper,
  FooterButton
} from '../styles/screens/welcome';

import { GreenText } from '../styles/global';

import WelcomeSvg from '../assets/illustrations/welcomeSvg.svg';

import Button from '../components/Button';

function Welcome() {
  const theme = useContext(ThemeContext);
  
  return (
    <>
      <SafeArea />
      <Container style={androidSafeArea}>
        <SvgContainer>
          <WelcomeSvg width={'100%'} height={'280'} />
        </SvgContainer>
        <Content>
          <WelcomeText>Faça seus <GreenText>investimentos</GreenText> de forma rápida e fácil.</WelcomeText>

          <View>
            <ButtonWrapper>
              <Button text="ENTRE" primary onPress={() => {}}/>
            </ButtonWrapper>

            <ButtonWrapper>
              <Button text="CADASTRE-SE" onPress={() => {}}/>
            </ButtonWrapper>
          </View>

          <Footer>
            <FooterText>Entre também com</FooterText>
           
            <FooterButtonsWrapper>
              <FooterButton>
                <FontAwesome name="facebook" size={30} color={theme.colors.background}/>
              </FooterButton>
              
              <FooterButton style={{marginLeft: 30}}>
                <AntDesign name="google" size={30} color={theme.colors.background}/>
              </FooterButton>
            </FooterButtonsWrapper>

          </Footer>
        </Content>
      </Container>
    </>
  );
}

export default Welcome;