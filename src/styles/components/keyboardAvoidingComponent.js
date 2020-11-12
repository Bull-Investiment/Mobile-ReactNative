import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundPrimary}
`;

export const Inner = styled.View`
    flex: 1;
`;