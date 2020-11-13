import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


export const Container = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  justify-content: flex-end;
  align-items: center;
  padding-top: 50px;
`;

export const ImageLogo = styled.Image`
  width: 200px;
  height: 150px;
  margin-bottom: 15px;
`;

export const RememberMeView = styled.View`
  padding-top: 40px;
  flex-direction: row;
  align-self: center;
  align-items: center;
`;

export const RememberMeText = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: 'Quicksand-Medium';
  font-size: 18px;
  margin-left: 15px;
`;

export const ButtonWrapper = styled.View`
width: 60%;
align-self: center;
margin-top: 15px;
padding-bottom: 50px;
`;