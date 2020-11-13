import styled from 'styled-components/native';

export const Container = styled.View`
  opacity: ${props => props.disabled ? 0.6 : 1}
`;

export const CustomButton = styled.TouchableOpacity`
  background-color: ${props => props.primary ? 
    props.theme.colors.primary : 
    props.theme.colors.backgroundSecondary
  };
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 11px;
`;

export const ButtonText = styled.Text`
  font-family: 'Quicksand-Medium';
  font-size: 22px;
  color: ${props => props.theme.colors.textOnPrimary};
`;