import React, { useContext } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from 'styled-components';

import { Feather } from '@expo/vector-icons';

import { Container } from '../../styles/global';

import { Content } from '../../styles/screens/home/main';

import {
  RecomendationView,
  Title,
  SubTitle,
  TitleAlternative,
  ConsultView
} from '../../styles/screens/invest/main';

function Main() {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  const goToDetails = (name) => {
    navigation.navigate('Details', { name });
  }

  return (
    <Container>
      <ScrollView>
        <Content>
          <Title>Baseado no seu perfil recomendamos para você: </Title>

          <TouchableOpacity onPress={() => goToDetails('Renda Fixa')}>
            <RecomendationView>
              <TitleAlternative>Renda Fixa</TitleAlternative>
            </RecomendationView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => goToDetails('Tesouro Direto')}>
            <RecomendationView>
              <TitleAlternative>Tesouro Direto</TitleAlternative>
            </RecomendationView>
          </TouchableOpacity>

          <SubTitle>Outros tipos de investimento </SubTitle>

          <TouchableOpacity onPress={() => goToDetails('Fundos de ações')}>
            <RecomendationView>
              <TitleAlternative>Fundos de ações</TitleAlternative>
            </RecomendationView>
          </TouchableOpacity>

          <SubTitle>Fale com um consultor</SubTitle>

          <TouchableOpacity>
            <ConsultView>
              <Feather name="smile" size={30} color={theme.colors.iconOnBackground} />
              <TitleAlternative>Entrar no chat</TitleAlternative>
            </ConsultView>
          </TouchableOpacity>

        </Content>
      </ScrollView>
    </Container>
  );
}

export default Main;