import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { useAuth } from '../../contexts/auth';

import { ThemeContext } from 'styled-components';

import { Feather } from '@expo/vector-icons';

import { Container } from '../../styles/global';

import { Content } from '../../styles/screens/home/main';

import {
  ProfileView,
  UserIcon,
  Name,
  Email,
  Menu,
  MenuOption,
  MenuIcon,
  OptionName
} from '../../styles/screens/profile/main';


function Main() {
  const theme = useContext(ThemeContext);
  const { user, signOut } = useAuth();
  
  const handleLogoutUser = () => {
    signOut();
  }

  return (
    <Container>
      <Content>
        <ProfileView>
          <UserIcon>
            <Feather name="user" size={48} color={theme.colors.primary} />
          </UserIcon>
          <Name>{user.name}</Name>
          <Email>{user.email}</Email>
        </ProfileView>

        <Menu>
          <TouchableOpacity>
            <MenuOption>
              <MenuIcon>
                <Feather name="sliders" size={32} color={theme.colors.primary} />
              </MenuIcon>
              <OptionName>Configurações</OptionName>
            </MenuOption>
          </TouchableOpacity>

          <TouchableOpacity>
          <MenuOption>
            <MenuIcon>
              <Feather name="help-circle" size={32} color={theme.colors.primary} />
            </MenuIcon>
            <OptionName>Ajuda</OptionName>
          </MenuOption>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogoutUser}>
            <MenuOption>
              <MenuIcon>
                <Feather name="log-out" size={32} color={theme.colors.primary} />
              </MenuIcon>
              <OptionName>Sair</OptionName>
            </MenuOption>
          </TouchableOpacity>
        </Menu>
      </Content>
    </Container >
  );
}

export default Main;