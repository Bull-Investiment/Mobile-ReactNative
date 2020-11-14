import React, { useContext, useState } from 'react';

import { ScrollView, TouchableOpacity } from 'react-native';

import { ThemeContext } from 'styled-components';

import { Feather, Entypo } from '@expo/vector-icons';

import { Container, EmptyView, GreenText } from '../../styles/global';

import {
  Content,
  Title,
  PatrimonyView,
  PatrimonyText,
  TotalPatrimonyWrapper,
  TotalPatrimonyText,
  TotalPatrimonyIcon,
  PatrimonyGains,
  InvestmentsView,
  TitleAlternative,
  EarningsView
} from '../../styles/screens/home/main';

function Main() {
  const [showPatrimony, setShowPatrimony] = useState(true);
  const theme = useContext(ThemeContext);

  const toggleShowPatrimony = () => {
    setShowPatrimony(prev => !prev);
  }

  return (
    <Container>
      <ScrollView>
        <Content>
          <Title>Bem vindo/a, Julia!</Title>

          <PatrimonyView>
            <PatrimonyText>Patrimônio</PatrimonyText>
            <TotalPatrimonyWrapper>
              <EmptyView style={{ marginLeft: 15 }} />
              <TotalPatrimonyText>{showPatrimony ? 'R$12.451,60' : '?'}</TotalPatrimonyText>
              <TotalPatrimonyIcon onPress={toggleShowPatrimony}>
                <Feather name={showPatrimony ? 'eye-off' : 'eye'} size={24} color={theme.colors.primary} />
              </TotalPatrimonyIcon>
            </TotalPatrimonyWrapper>
            <PatrimonyGains>{showPatrimony ? '+ 161,02 (3,2%)' : "+ ? (0%)"}</PatrimonyGains>
          </PatrimonyView>

          <TouchableOpacity>
            <InvestmentsView>
              <Entypo name="wallet" size={36} color={theme.colors.iconOnBackground} />
              <TitleAlternative>Meus Investimentos</TitleAlternative>
            </InvestmentsView>
          </TouchableOpacity>

          <TouchableOpacity>
            <EarningsView>
              <Feather name="trending-up" size={36} color={theme.colors.iconOnBackground} />
              <TitleAlternative>Rendimentos</TitleAlternative>
            </EarningsView>
          </TouchableOpacity>

        </Content>
      </ScrollView>
    </Container>
  );
}

export default Main;