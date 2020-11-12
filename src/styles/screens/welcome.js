import styled from 'styled-components/native';
import { StatusBar, Plataform, StyleSheet } from 'react-native';

export const SafeArea = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.primary};
`;

export const Container = styled.View`
    flex: 1;
    background: ${props => props.theme.colors.backgroundPrimary};
    height: 100%;
`;

export const androidSafeArea = StyleSheet.create({
  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 25 : 0
});

export const SvgContainer = styled.View`
  margin-top: -30px;
`;

export const Content = styled.View`
  padding-top: 10px;
`;