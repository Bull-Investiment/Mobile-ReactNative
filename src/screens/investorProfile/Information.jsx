import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, GreenText, EmptyView } from '../../styles/global';
import { Content, ButtonWrapper } from '../../styles/screens/investorProfile/main';
import { SubText, Title } from '../../styles/screens/investorProfile/information';

import Button from '../../components/Button';

import InvestorIcon from '../../assets/illustrations/investorProfileSvg.svg';


function Information() {
  const navigation = useNavigation();

  const goToNextScreen = () => {
    navigation.navigate('StepOne');
  }

  return (
    <Container>
      <Content>
        <EmptyView />
        <View>
          <InvestorIcon width={'100%'} height={'210'} />
          <Title>Espere um pouco!</Title>
          <SubText>Antes de te ajudar a fazer seu dinheiro render precisamos entender o seu <GreenText>perfil de investidor</GreenText></SubText>
        </View>
        <ButtonWrapper>
          <Button
            text="AVANÇAR"
            primary
            onPress={goToNextScreen}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}

export default Information;