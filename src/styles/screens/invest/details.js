import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 20px;
  padding-bottom: 15px;
  color: ${props => props.theme.colors.textOnPrimary}
`;

export const InvestTitle = styled(Title)`
  font-family: 'Quicksand-Regular';
  font-size: 22px;
  padding-top: 30px;
  opacity: 0.8;
`;

export const ItemContainer = styled.View`
  align-items: flex-start;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 10px;
  padding-top: 5px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  margin-top: 15px;
`;

export const Bold = styled.Text`
  color: ${props => props.theme.colors.secondaryLighter};
`;

export const ItemTitle = styled(Title)`
  font-size: 21px;
  padding-bottom: 0;
  font-family: 'Quicksand-Medium';
`;

export const ItemSubTitle = styled(ItemTitle)`
  opacity: 0.6;
  font-size: 18px;
  padding-top: 5px;
`;

export const SubView = styled.View`
  padding: 5px;
  align-items: center;
`;

export const TopView = styled.View`
  flex-direction: row;
  align-items: baseline;
  padding: 10px;
`;

export const MidView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-left: 15px;
  padding-right: 20px;
`;

export const BottomView = styled.View`
  padding-top: 10px;
  padding-left: 10px;
`;