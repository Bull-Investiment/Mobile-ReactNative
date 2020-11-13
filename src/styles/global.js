import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight + 25 : 0};
`;

export const EmptyView = styled.View``;

export const GreenText = styled.Text`
  color: ${props => props.theme.colors.primary};
`;

export const Divider = styled.View`
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.backgroundSecondary};
  height: 1px;
  margin-left: 5px;
  margin-right: 5px;
  width: ${props => props.width ?? '30px'};
`;