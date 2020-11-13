import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 50px;
  padding-top: 0;
`;

export const ButtonWrapper = styled.View`
  margin-top: 80px;
`;

export const TopBar = styled.View`
  padding-top: 15px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const ProgressView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const OptionsContainer = styled.View`
  width: 100%;
  align-items: stretch;
`;

export const OptionWrapper = styled.View`
  margin: 15px;
`;

export const ProgressCircle = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.backgroundSecondary};
`;

export const QuestionContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin-top: 60px;
`;

export const Title = styled.Text`
  font-family: 'Quicksand-Medium';
  font-size: 33px;
  color: ${props => props.theme.colors.textOnPrimary}
`;