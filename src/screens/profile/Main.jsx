import React, { useContext, useState } from 'react';

import { ScrollView, TouchableOpacity} from 'react-native';

import { ThemeContext } from 'styled-components';

import { Feather, Entypo } from '@expo/vector-icons';

import { Container, EmptyView } from '../../styles/global';

import { Content } from '../../styles/screens/home/main';

import { ProfileView } from '../../styles/screens/profile/main';


function Main() {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <ScrollView>
        <Content>
          <ProfileView>
          </ProfileView>
        </Content>
      </ScrollView>
    </Container>
  );
}

export default Main;