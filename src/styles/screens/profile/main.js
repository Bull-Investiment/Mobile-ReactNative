import styled from 'styled-components/native';
import { PatrimonyView, Title, PatrimonyGains } from '../../screens/home/main';

export const ProfileView = styled(PatrimonyView)``;

export const UserIcon = styled.View`
  padding: 15px;
  flex-direction: row;
  background-color: #303030;
  border-radius: 50px;
  margin-top: -1px;
  margin-left: 15px;
  border-width: 2px;
  border-color: ${props => props.theme.colors.primary};
`;

export const MenuIcon = styled(UserIcon)`
  padding: 10px;
  border-width: 0;
  border-color: transparent;
`;

export const Name = styled(Title)`
  padding-top: 10px;
`;

export const Email = styled(PatrimonyGains)`
  font-size: 16px;
`;

export const Menu = styled.View`
  padding-top: 20px;
`;

export const MenuOption = styled.View`
  flex-direction: row;
  align-items: baseline;
  margin-top: 30px;
`;

export const OptionName = styled(Name)`
  font-size: 22px;
  padding-left: 15px;
  padding-bottom: 2px;
`;