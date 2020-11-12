import styled from 'styled-components/native';
import { Plataform, StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  padding-top: ${Plataform.OS === "android" ? StatusBar.currentHeight + 25 : 0};
`;

export const GreenText = styled.Text`
  color: ${props => props.theme.colors.primary};
`;