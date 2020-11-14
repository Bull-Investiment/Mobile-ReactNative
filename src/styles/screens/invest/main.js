import styled from 'styled-components/native';

import { EarningsView, Title as homeTitle, TitleAlternative as homeTitleAlternative } from '../../../styles/screens/home/main'; 

export const RecomendationView = styled(EarningsView)`
  margin-top: 30px;
`;

export const Title = styled(homeTitle)`
  font-size: 22px;
  width: 100%;
  opacity: .9;
  padding-bottom: 15px;
`;

export const TitleAlternative = styled(homeTitleAlternative)`
  padding-top: 0;
`;

export const SubTitle = styled(Title)`
  padding-top: 30px;
  padding-bottom: 0;
  width: 110%;
`;

export const ConsultView = styled(RecomendationView)`
  flex-direction: row;
  background-color: ${props => props.theme.colors.secondary};;
  padding: 20px;
  margin-top: 20px;
`;