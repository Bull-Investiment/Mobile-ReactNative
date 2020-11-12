import styled from 'styled-components/native';
import { StatusBar, Plataform, StyleSheet } from 'react-native';

export const SafeArea = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.primaryDarker};
`;

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.backgroundPrimary};
`;

export const androidSafeArea = StyleSheet.create({
  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 25 : 0
});

export const SvgContainer = styled.View`
  margin-top: -30px;
`;

export const Content = styled.View`
  flex: .8;
  padding-top: 10px;
  width: 68%;
  align-self: center;
  justify-content: space-between;
`;

export const WelcomeText = styled.Text`
  font-family: 'Quicksand-Medium';
  font-size: 36px;
  text-align: left;
  color: ${props => props.theme.colors.textOnPrimary};
  margin-bottom: 60px;
`;

export const ButtonWrapper = styled.View`
  padding-top: 30px;
`;

export const Footer = styled.View`
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.Text`
  font-size: 22px;
  font-family: 'Quicksand-Regular';
  color: ${props => props.theme.colors.textOnPrimary};
`;

export const FooterButtonsWrapper = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

export const FooterButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  width: 60px;
  background: ${props => props.theme.colors.primary};
  border-radius: 100px;
`;