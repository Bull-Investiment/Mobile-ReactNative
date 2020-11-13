import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight + 25 : 0};
`;

export const GreenText = styled.Text`
  color: ${props => props.theme.colors.primary};
`;