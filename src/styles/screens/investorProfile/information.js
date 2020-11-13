import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: 'Quicksand-Medium';
  font-size: 36px;
  color: ${props => props.theme.colors.textOnPrimary};
  padding-top: 50px;
`;

export const SubText = styled.Text`
  width: 90%;
  align-items: center;
  font-family: 'Quicksand-Medium';
  font-size: ${props => props.small ? '15px' : '24px'};
  color: ${props => props.theme.colors.textOnPrimary};
  padding-top: 20px;
  text-align: justify;
`;