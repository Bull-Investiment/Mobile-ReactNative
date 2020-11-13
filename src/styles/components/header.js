import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  padding-top: 44px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 95px;
`;

export const Title = styled.Text`
  font-family: 'Quicksand-Medium';
  color: ${props => props.theme.colors.textOnPrimary};
  font-size: 20px;
`;

export const EmptyView = styled.View``;