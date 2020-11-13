import React, { useContext } from 'react';

import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from 'styled-components';

import { Feather } from '@expo/vector-icons';

import { EmptyView } from '../styles/global';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Container, Title } from '../styles/components/header';

export default function Header({ title, hasCancelButton = false, hasBackButton = true }) {

  const { colors } = useContext(ThemeContext);

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  }

  const goToHomePage = () => {
    navigation.navigate('Welcome');
  }

  return (
    <Container>
      {hasBackButton ? (
        <BorderlessButton onPress={goBack}>
          <Feather name="arrow-left-circle" size={28} color={colors.iconOnBackground} />
        </BorderlessButton>
      ) : (
          <EmptyView />
        )}


      <Title>{title}</Title>

      {hasCancelButton ? (
        <BorderlessButton onPress={goToHomePage}>
          <Feather name="x" size={28} color={colors.error} />
        </BorderlessButton>
      ) : (
          <EmptyView />
        )}

    </Container>
  );
}