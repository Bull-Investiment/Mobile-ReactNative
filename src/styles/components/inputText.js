import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 10px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  border-bottom-width: ${props => props.hasBorderBottom ? "1px" : 0};
  border-bottom-color: ${props => props.borderColor ?? props.theme.colors.textOnPrimary};
`;

export const Title = styled.Text`
  color: ${props => props.titleColor ?? props.theme.colors.textOnPrimary};
  font-family: 'Quicksand-Medium';
  font-size: 20px;
  margin-bottom: 5px;
  padding-left: 10px;
  padding-top: 5px;
  align-self: flex-start;
`;

export const Input = styled.TextInput`
  border-width: .5px;
  height: 40px;
  width: 300px;
  padding-right: 10px;
  padding-left: 10px;
  margin-bottom: 5px;
  font-size: 18px;
  background-color: ${props => props.backgroundColor ?? props.theme.colors.backgroundSecondary};
  border-radius: 12px;
  border-width: ${props => props.hasBorderBottom ? 0 : "1"};
  color: ${props => props.textColor ?? props.theme.colors.textOnSecondary};
`;