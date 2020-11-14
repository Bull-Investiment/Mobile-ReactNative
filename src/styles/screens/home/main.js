import styled from 'styled-components/native';

export const Content = styled.View`
  padding: 20px;
  padding-left: 60px;
  padding-right: 60px;  
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.textOnPrimary};
  font-family: 'Quicksand-Medium';
  font-size: 26px;
  opacity: 0.8;
`;

export const PatrimonyView = styled.View`
  width: 100%;
  padding: 40px;
  margin-top: 15px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundLigher};
`;

export const PatrimonyText = styled(Title)`
  font-size: 20px;
  padding-bottom: 20px;
`;

export const TotalPatrimonyWrapper = styled.View`
  flex-direction: row;
`;

export const TotalPatrimonyText = styled(PatrimonyText)`
  font-size: 28px;
  padding-bottom: 0;
`;

export const TotalPatrimonyIcon = styled.TouchableOpacity`
  background-color: #303030;
  border-radius: 50px;
  padding: 8px;
  margin-top: -1px;
  margin-left: 15px;
`;

export const PatrimonyGains = styled(PatrimonyText)`
  padding-top: 5px;
  font-size: 20px;
  opacity: 0.6;
`;

export const InvestmentsView = styled(PatrimonyView)`
  background-color: ${props => props.theme.colors.primaryDarker};
  padding: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 50px;
`;

export const TitleAlternative = styled(Title)`
  padding-top: 15px;
  font-size: 24px;
  width: 80%;
  text-align: center;
`;

export const EarningsView = styled(InvestmentsView)``;